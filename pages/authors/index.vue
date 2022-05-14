<script setup lang="ts">
import { renderRichText } from "@/composables/contentful"

const { data: authors } = await useFetch("/api/authors")
</script>

<template>
  <app-container>
    <h1 class="text-5xl font-display">Authors</h1>

    <section class="mt-5 border-4 border-primary-900 p-2 flex flex-col gap-3">
      <nuxt-link
        :to="{ name: 'authors-id', params: { id: author.id } }"
        v-for="author in authors"
        :key="author.id"
        class="bg-primary-200 p-2 rounded-lg cursor-pointer hover:bg-primary-300 drop-shadow hover:drop-shadow-none"
      >
        <h4 class="text-2xl font-display">{{ author.name }}</h4>
        <div v-html="renderRichText(author.description)"></div>
      </nuxt-link>
    </section>
  </app-container>
</template>
