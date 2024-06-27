import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import LayoutView from "@/views/LayoutView.vue";
import HomeView from '../views/HomeView.vue'
import LessonHomeView from "@/views/LessonHomeView.vue";
import LessonView from "@/views/LessonView.vue";
import TestView from "@/views/TestView.vue";
import TeacherView from "@/views/TeacherView.vue";
import AdminView from "@/views/AdminView.vue";
import Course from "@/views/Course.vue";

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
      path: '/teacher',
      name: 'teacher',
      component: TeacherView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('../views/LessonView.vue')
    }
  ]
})

export default router
