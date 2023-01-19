import { ref } from 'vue'
import { defineStore } from 'pinia'

// Problematic router import :(
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref({
    username: 'Cedric',
  })

  async function fetchUser() {
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
  }

  return { currentUser, fetchUser }
})

async function fetchUser() {
  // Some async call
}
