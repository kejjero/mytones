<template >
  <div style="display: flex; flex-direction: column">
    <span>Count: {{ counterStore.count }}</span>
    <button @click="counterStore.randomizeCounter()">button</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<style module lang="scss">
@import "HomePage.module.scss";
</style>