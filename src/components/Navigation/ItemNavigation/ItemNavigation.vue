<template>
  <li :class="[$style.navItem]">
    <RouterLink :to="link" :class="$style.navLink">
      <img :src="icon" :alt="name" :class="$style.navIcon" />
      <span :class="$style.navName">
        {{ name }}
      </span>
    </RouterLink>
  </li>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      icon: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  }
};
</script>

<style module lang="scss">
@import "./ItemNavigation.module.scss";
</style>