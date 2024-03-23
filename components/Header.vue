<script setup lang="ts">
const token = useCookie('accessToken');

const handleLogout = () => {
  token.value = null
  navigateTo('/')
}
</script>

<template>

  <nav class="flex flex-wrap items-center justify-between p-4 bg-black text-white">
    <div class="w-auto px-4 lg:order-1 lg:w-1/5">
      <NuxtLink to="/users" class="text-2xl font-semibold font-heading">
        <span>My Service</span>
        <span class="text-xs ml-3 p-0.5 bg-white text-black rounded">admin</span>
      </NuxtLink>
    </div>
    <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
      <NuxtLink to="/login" v-if="!token" class="block mt-4 mr-4  lg:inline-block lg:mt-0 hover:font-bold">
        로그인
      </NuxtLink>
      <button @click="handleLogout" v-if="token" class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:font-bold">
        로그아웃
      </button>
    </div>
  </nav>

</template>

<style scoped>

</style>