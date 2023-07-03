import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    count: 22
  }),
  actions: {
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})