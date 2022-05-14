import { client } from "@/server/contentful/client"
import { authorFromEntry, Author } from "@/server/api/authors/helpers"

export default defineEventHandler(async () => {
  const authorEntries = await client.getEntries<Author>({
    content_type: "author",
  })

  return authorEntries.items.map((entry) => authorFromEntry(entry))
})
