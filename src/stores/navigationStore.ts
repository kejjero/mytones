import { defineStore } from 'pinia'
import {HomeIcon, FavoriteIcon, MusicIcon} from '@/assets/icons'

export const useNavigationStore = defineStore('navigationStore', {
  state: () => ({
    navItems: [
      { link: '/', name: 'Home', icon: HomeIcon},
      { link: '/music', name: 'My Music', icon: MusicIcon },
      { link: '/favorites', name: 'Favorites', icon: FavoriteIcon }
    ]
  })
})