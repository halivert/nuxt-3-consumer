import contentful from "contentful"
const config = useRuntimeConfig()

export const client = contentful.createClient({
  space: config.space,
  accessToken: config.apiKey,
})
