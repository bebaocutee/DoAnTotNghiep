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
import AdminCourse from "@/views/AdminCourse.vue";
import QuestionView from "@/views/QuestionView.vue";
import TeacherLesson from "@/views/TeacherLesson.vue";
import TeacherTest from "@/views/TeacherTest.vue";
import TeacherQuestionBank from "@/views/TeacherQuestionBank.vue";
import TeacherChapter from "@/views/TeacherChapter.vue";
import AdminTeacher from "@/views/AdminTeacher.vue";
import AdminStudent from "@/views/AdminStudent.vue";
import TestStudent from "@/views/TestStudent.vue";

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
      path: '/test/:id',
      name: 'test-student',
      component: TestStudent
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: TeacherView,
      children: [
        {
          path: '/teacher-lesson',
          name: 'teacher-lesson',
          component: TeacherLesson
        },
        {
          path: '/teacher-test',
          name: 'teacher-test',
          component: TeacherTest
        },
        {
          path: '/teacher-chapter',
          name: 'teacher-chapter',
          component: TeacherChapter
        },
        {
          path: '/teacher-question-bank',
          name: 'teacher-question-bank',
          component: TeacherQuestionBank
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      children: [
        {
          path: '/admin-course',
          name: 'admin-course',
          component: AdminCourse,
        },
        {
          path: '/admin-teacher',
          name: 'admin-teacher',
          component: AdminTeacher,
        },
        {
          path: '/admin-student',
          name: 'admin-student',
          component: AdminStudent,
        },
        {
          path: '/admin-lesson',
          name: 'admin-lesson',
          component: TeacherLesson
        },
        {
          path: '/admin-test',
          name: 'admin-test',
          component: TeacherTest
        },
        {
          path: '/admin-chapter',
          name: 'admin-chapter',
          component: TeacherChapter
        },
        {
          path: '/admin-question-bank',
          name: 'admin-question-bank',
          component: TeacherQuestionBank
        }
      ]
    },

    {
      path: '/question/:lessonId',
      name: 'question',
      component: QuestionView
    },

    {
      path: '/lesson/:id',
      name: 'lesson',
      component: () => import('../views/LessonView.vue')
    }
  ]
})

export default router
