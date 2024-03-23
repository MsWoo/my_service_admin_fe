<script setup lang="ts">
navigateTo('/users')


definePageMeta({
  // middleware: "auth"
})
import {useUtils} from "~/composables/useUtils";
import {useTitle, useMouse} from "@vueuse/core";

const {sayHello} = useUtils()

const title = useTitle(() => "My Service")
const {x, y} = useMouse()

const {$hello} = useNuxtApp()

sayHello()
console.log(useNuxtApp())
$hello('world')
</script>

<template>
<!--  <Alert/>-->
<!--  <div>Mouse Position : {{ x }}, {{ y }}</div>-->
  <div class="container p-8">
    <img src="@/assets/images/400.png">
    <img src="@/public/images/boot.png">
  </div>


</template>
<style scoped></style>