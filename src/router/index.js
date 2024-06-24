import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from "@/views/LayoutView.vue";
import HomeView from '../views/HomeView.vue'
import LessonView from "@/views/LessonView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: LayoutView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('../views/LessonView.vue')
    }
  ]
})

export default router
