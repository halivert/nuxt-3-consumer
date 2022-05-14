import { client } from "@/server/contentful/client"
import { Author, authorFromEntry } from "@/server/api/authors/helpers"

export default defineEventHandler(async (event) => {
  const authorEntry = await client.getEntry<Author>(event.context.params.id)

  return authorFromEntry(authorEntry)
})
