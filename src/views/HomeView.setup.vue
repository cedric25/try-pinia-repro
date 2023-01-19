<script setup>
// import { useUserStore } from '@/stores/user.optionStore.js'
import { useUserStore } from '@/stores/user.setupStore.js'

const userStore = useUserStore()
</script>

<template>
  <main>
    <i>(HomeView.setup.vue)</i>
    <div style="margin-top: 14px">
      store username: {{ userStore.currentUser.username }}
    </div>
  </main>
</template>
