<template>
  <nav class="navigation">
    <RouterLink to="/" class="logo">
      <Logo />
      <h1 class="logo-name">Mytones</h1>
    </RouterLink>
    <ul>
      <li v-for="({ name, link }) in items">
        <RouterLink :to="link">{{ name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import Logo from '../../assets/icons/Logo.vue'
import {ref} from "vue";

type ItemsType = {
  link: string,
  name: string
}

const items = ref<ItemsType[]>([{ link: '/', name: 'home'}, { link: '/about', name: 'about' }])

</script>

<style scoped >
.navigation {
  min-width: 260px;
  min-height: 100vh;
  background: #fff;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 38px;
}

.logo-name {
  color: #4343EF;
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  margin-left: 8px;
}
</style>