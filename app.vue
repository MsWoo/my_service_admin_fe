<script setup lang="ts">
</script>

<template>
    <NuxtLayout>
      <div class="wrap">
        <header>
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/custom">Custom</NuxtLink>
              <NuxtLink to="/counter">Counter</NuxtLink>
              <NuxtLink to="/login">Login</NuxtLink>
            </li>
          </ul>
        </header>
        <NuxtPage/>
      </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped></style>