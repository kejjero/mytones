<template>
  <nav :class="$style.navigation">
    <RouterLink to="/" :class="$style.logo">
      <LogoIcon />
      <h1 :class="$style.logoName">Mytones</h1>
    </RouterLink>
    <ul :class="$style.navList">
      <ItemNavigation
          v-bind:key="name"
          v-for="({name, link, icon }) in navStore.navItems"
          v-bind:name="name"
          v-bind:link="link"
          v-bind:icon="icon"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { LogoIcon } from '@/assets/icons'
import { useNavigationStore } from '@/stores/navigationStore'
import ItemNavigation from "./ItemNavigation/ItemNavigation.vue";

const navStore = useNavigationStore()
</script>


<style module lang="scss">
@import 'Navigation.module';
</style>
