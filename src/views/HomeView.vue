<script>
import { defineComponent } from 'vue'
// import { storeToRefs } from 'pinia'
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user.optionStore.js'
// import { useUserStore } from '@/stores/user.setupStore.js'

export default defineComponent({
  // --- Working
  // but still some console error: "Cannot access 'HomeView' before initialization" when HMR
  // console error disappears when removing "import router from '../router'" from user.optionStore.js
  // or when lazy-loading HomeView component in router/index.js
  // setup() {
  //   const userStore = useUserStore()
  //
  //   const { currentUser } = storeToRefs(userStore)
  //   return {
  //     currentUser,
  //   }
  // },

  // --- NOT working
  // working if lazy-loading HomeView component in router/index.js
  computed: {
    ...mapState(useUserStore, ['currentUser']),
  },
})
</script>

<template>
  <main>
    <i>(HomeView.vue)</i>
    <div style="margin-top: 14px">
      store username: {{ currentUser.username }}
    </div>
  </main>
</template>
