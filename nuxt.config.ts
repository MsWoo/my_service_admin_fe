// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    'login/**': { ssr: false }
  },
  devtools: {enabled: true},
  runtimeConfig: {
    public: {
      apiEndpoint: 'http://localhost:3000'
    }
  },
  vite: {
    server: {
      proxy: {
        '/api/v1/': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          secure: false,
          ws: true
        }
      }
    },
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
