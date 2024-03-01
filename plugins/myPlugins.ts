export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      hello: (msg: string) => console.log(`Hello ${msg}`)
    }
  }
})