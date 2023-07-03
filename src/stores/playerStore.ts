import {defineStore} from "pinia";

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    songsTopWeek: [
      { id: 1, author: 'Justin Bieber', songName: 'Anyone', time: '03:11' },
      { id: 2, author: 'Demi Lovato', songName: 'What Other Peopder', time: '03:47' },
      { id: 3, author: 'BTS', songName: 'Dynamite', time: '04:15' },
      { id: 4, author: 'Selena Gomez', songName: 'Selfish Love ', time: '03:31' },
    ]
  })
})