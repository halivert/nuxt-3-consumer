import { Entry, Asset } from "contentful"
import { Document } from "@contentful/rich-text-types"

export interface ProfilePicture {
  id: string
  title: string
  description: string
  url: string
}

export interface Author {
  id: string
  name: string
  description: Document
  profilePicture: ProfilePicture
}

export const profilePictureFromAsset = (entry: Asset): ProfilePicture => ({
  id: entry.sys.id,
  title: entry.fields.title,
  description: entry.fields.description,
  url: entry.fields.file.url,
})

export const authorFromEntry = (entry: Entry<Author>): Author => ({
  id: entry.sys.id,
  name: entry.fields.name,
  description: entry.fields.description,
  profilePicture: profilePictureFromAsset(
    <Asset>(entry.fields.profilePicture as unknown)
  ),
})
