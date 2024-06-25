import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import LayoutView from "@/views/LayoutView.vue";
import HomeView from '../views/HomeView.vue'
import LessonHomeView from "@/views/LessonHomeView.vue";
import LessonView from "@/views/LessonView.vue";
import TestView from "@/views/TestView.vue";

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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/lesson_home',
      name: 'lessonHome',
      component: LessonHomeView
    },

    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('../views/LessonView.vue')
    }
  ]
})

export default router
