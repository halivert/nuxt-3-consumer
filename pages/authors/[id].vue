<script setup lang="ts">
import { Author } from "@/server/api/authors/helpers"
import { Story } from "@/server/api/stories/helpers"
import { renderRichText } from "@/composables/contentful"

const route = useRoute()

const { data: author } = await useFetch<Author>(
  `/api/authors/${route.params.id}`
)

const { pending: storiesPending, data: storiesData } = useLazyFetch<{
  stories: Story[]
}>(`/api/authors/${author.value.id}/stories`)

const profilePicture = computed(() => author.value.profilePicture)
const stories = computed(() => storiesData.value?.stories ?? [])
</script>

<template>
  <app-container>
    <section>
      <h1 class="text-5xl font-display">{{ author.name }}</h1>
      <div class="flex mt-3 gap-3 justify-between">
        <div v-html="renderRichText(author.description)"></div>
        <img
          class="w-16 rounded-full drop-shadow"
          :src="profilePicture.url"
          :alt="profilePicture.description || profilePicture.title"
        />
      </div>
    </section>
    <section>
      <span v-if="storiesPending">Loading...</span>
      <template v-else-if="stories.length">
        <h3 class="text-3xl font-display">Stories</h3>
        <article v-for="story in stories" class="story-card">
          <h4 class="text-2xl font-display">{{ story.title }}</h4>
          <div v-html="renderRichText(story.content)"></div>
        </article>
      </template>
      <template v-else>
        <span class="italic text-sm">There are no stories</span>
      </template>
    </section>
  </app-container>
</template>
