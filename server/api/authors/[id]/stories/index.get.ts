import { Story, storyFromEntry } from "@/server/api/stories/helpers"
import { client } from "@/server/contentful/client"

export default defineEventHandler(async (event) => {
  const storyEntries = await client.getEntries<Story>({
    content_type: "story",
    "fields.author.sys.id": event.context.params.id,
  })

  return { stories: storyEntries.items.map(storyFromEntry) }
})
