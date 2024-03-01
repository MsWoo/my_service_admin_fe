<script setup lang="ts">
definePageMeta({
  middleware: "auth"
})
import { useUtils } from "~/composables/useUtils";
import { useTitle, useMouse } from "@vueuse/core";

const { sayHello } = useUtils()

const title = useTitle(() => "MsWoo의 홈페이지")
const { x, y } = useMouse()

const { $hello } = useNuxtApp()

sayHello()
console.log(useNuxtApp())
$hello('world')
</script>

<template>
  <Alert/>
  <ProfileHeaderAvatar/>
  <div>Mouse Position : {{x}}, {{y}}</div>
  <img src="@/assets/images/400.png">
  <img src="@/public/images/boot.png">


</template>

<style scoped></style>