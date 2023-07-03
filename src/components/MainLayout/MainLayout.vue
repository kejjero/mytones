<script setup>
import { Header, MusicPanel } from '@/components'
</script>

<template>
  <div :class="$style.content">
    <Header />
    <div :class="$style.mainLayout">
      <RouterView />
      <MusicPanel />
    </div>
  </div>
</template>

<style module lang="scss">
@import "./MainLayout.module.scss";
</style>