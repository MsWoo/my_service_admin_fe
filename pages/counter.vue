<script setup>
import { useCounter } from "~/composables/state";

const stateCounter = useCounter();
const piniaCounter = useCounterStore();
</script>

<template>
  <p> {{stateCounter}} </p>
  <button @click="stateCounter++" class="p-5 bg-amber-600">+</button>
  <button @click="stateCounter--" class="p-5 bg-green-400">-</button>

  <p> {{piniaCounter.count}} </p>
  <button @click="piniaCounter.increment()" class="p-5 bg-amber-600">+</button>
  <button @click="piniaCounter.decrement()" class="p-5 bg-green-400">-</button>
</template>