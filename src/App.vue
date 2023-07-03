<script setup lang="ts">
import { MainLayout, Navigation } from '@/components'
</script>

<template>
  <div class="wrapper">
    <Navigation />
    <MainLayout />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>