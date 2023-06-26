<script setup lang="ts">
import Navigation from './components/Navigation/Navigation.vue'
import Main from './components/Main.vue'
</script>

<template>
  <div class="wrapper">
    <Navigation />
    <Main />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

</style>