import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, MusicView, FavoritesView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
  ]
})

export default router
