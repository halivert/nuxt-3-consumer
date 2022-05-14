import { Entry } from "contentful"
import { Document } from "@contentful/rich-text-types"
import { Author, authorFromEntry } from "@/server/api/authors/helpers"

export interface Story {
  id: string
  title: string
  content: Document
  author: Author
}

export const storyFromEntry = (entry: Entry<Story>): Story => ({
  id: entry.sys.id,
  title: entry.fields.title,
  content: entry.fields.content,
  author: authorFromEntry(<Entry<Author>>(entry.fields.author as unknown)),
})
