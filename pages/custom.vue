<script setup lang="ts">
definePageMeta({
  layout: "custom"
})

const { data } = await useFetch('/api/hello')
console.log(data)

</script>
<template>
  <h1>Custom Page</h1>
  <h1>{{ data }}</h1>
</template>