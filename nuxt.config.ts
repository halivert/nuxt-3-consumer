import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    space: process.env.SPACE || "space",
    apiKey: process.env.API_KEY || "api",
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
