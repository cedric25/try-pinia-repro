import { defineStore } from 'pinia'

// Problematic router import :(
import router from '../router'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: { username: 'Cedric' },
  }),
  actions: {
    // ----- ACTIONS -----
    async fetchUser() {
      let fetchUserAnswer
      try {
        fetchUserAnswer = await fetchUser()
      } catch (err) {
        console.log('err.name', err.name, err.message)
        if (err.message === 'Unauthorized') {
          // ...
          router.push({ name: 'login' })
        }
      }
      // ...
    },
  },
})

async function fetchUser() {
  // Some async call
}
