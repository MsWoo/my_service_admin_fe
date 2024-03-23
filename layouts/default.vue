<script setup lang="ts">
import Header from "~/components/Header.vue";
import SideBar from "~/components/SideBar.vue";
import {useSidebarConfig} from "~/composables/store/useSidebarConfig";

const sidebarConfig = useSidebarConfig();

</script>

<template>
  <div class="relative h-screen overflow-hidden bg-white">
    <Header/>
    <div class="container relative z-10 flex">
      <SideBar
          :menu-data="sidebarConfig"
      />
      <slot/>
    </div>
  </div>
</template>
<style scoped></style>