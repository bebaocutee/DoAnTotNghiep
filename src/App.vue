<script>
import { RouterLink, RouterView } from 'vue-router'
import {mapGetters} from "vuex";

export default {
  created() {
    this.checkAuth()
  },
  computed: {
    ...mapGetters(['loading'])
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
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
  <RouterView />
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
}

.loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  border-radius: 50%;
}

.loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  width: 36px;
  height: 36px;
}

.loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  width: 36px;
  height: 36px;
  animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
