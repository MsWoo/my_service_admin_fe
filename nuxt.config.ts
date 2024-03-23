// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      "/api/v1/**": {
        proxy: "http://localhost:8080/api/v1/**",
      }
    }
  },
  devtools: {enabled: true},
  runtimeConfig: {
    public: {
      // apiEndpoint: process.env.NUXT_API_ENDPOINT
      apiEndpoint: 'http://localhost:8080'
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  css: ['@/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
