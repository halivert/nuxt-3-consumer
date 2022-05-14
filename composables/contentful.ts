import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { Document, BLOCKS } from "@contentful/rich-text-types"

export const renderRichText = (content: Document): string => {
  return documentToHtmlString(content, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const {
          description,
          file: { url },
        } = node.data.target.fields

        return `<img
          alt="${description}"
          src="${url}"
          style="--url: url(${url})"
        />`
      },
    },
  })
}
