<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  created() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token')
        axios.get('check-auth')
      }
    }
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
