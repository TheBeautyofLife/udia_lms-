import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/auth/Login.vue'

import more_stud_details from './views/student_details2'
import more_teacher_details from './views/teacher_details2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
      {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/manage_students',
      name: 'manage_students',
      component: () => import('./views/manage_students.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('./views/students.vue')
    },
    {
      path: '/student_details',
      name: 'student_details',
      component: () => import('./views/student_details.vue')
    },
    {
      path: '/teacher_details',
      name: 'teacher_details',
      component: () => import('./views/teacher_details.vue')
    },
    {
      path: '/user_management',
      name: 'user_management',
      component: () => import('./views/user_management.vue')
    },
    {
      path: '/manage_schools',
      name: 'manage_schools',
      component: () => import('./views/manage_schools.vue')
    },
    {
      path: '/school_name',
      name: 'school_name',
      component: () => import('./views/school_name.vue')
    },
    {
      path: '/manage_teachers',
      name: 'manage_teachers',
      component: () => import('./views/manage_teachers.vue')
    },
    {
      path: '/manage_courses',
      name: 'manage_courses',
      component: () => import('./views/manage_courses.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('./views/teachers.vue')
    },
    {
      path: '/department_details',
      name: 'department_details',
      component: () => import('./views/department_details.vue')
    },
    {
      path: '/course_details',
      name: 'course_details',
      component: () => import('./views/course_details.vue')
    },
    {
      path: '/student_details2',
      name: 'more_details',
      component: more_stud_details
    },
    {
      path: '/teacher_details2',
      name: 'more_teacher_details',
      component: more_teacher_details
    }
  ]
})
