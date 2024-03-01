export default defineNuxtRouteMiddleware((to, from) => {
  let isLoggedIn = false

  if (isLoggedIn) {
    return navigateTo(to.fullPath)
  } else {
    return navigateTo("/login")
  }
})