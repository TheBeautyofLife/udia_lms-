 
import Vue from 'vue'
import Router from 'vue-router'

import dashboard from './views/dashboard.vue'
import login from './views/auth/login.vue'
import forgot from './views/auth/forgot.vue'
import home from './views/home.vue'


Vue.use(Router)

export default [
  {
    path: '/student',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/student/all-courses',
    name: 'all_courses',
    component:() => import ('./views/all_courses.vue')
  },
  {
    path: '/student/calendar',
    name: 'calendar',
    component: () => import('./views/calendar.vue')
  },
  {
    path: '/student/test',
    name: 'test',
    component: () => import('./views/test.vue')
  },
  {
    path: '/student/test2',
    name: 'test2',
    component: () => import('./views/test2.vue')
  },
  {
    path: '/student/login',
    name: 'login',
    component: login
  },
  {
    path: '/student/forgot',
    name: 'forgot',
    component: forgot
  },
  {
    path: '/student/home',
    name: 'home',
    component: home
  },
  {
    path: '/student/profile',
    name: 'profile',
    component: () => import('./views/profile.vue')
  },
  {
    path: '/student/browse',
    name: 'browse',
    component: () => import('./views/browse_courses.vue')
  },
  {
    path: '/student/files',
    name: 'files',
    component: () => import('./views/files.vue')
  },
  {
    path: '/student/course_material',
    name: 'course_material',
    component: () => import('./views/course_material.vue')
  },
  {
    path: '/student/assignments',
    name: 'assignments',
    component: () => import('./views/assignments.vue')
  },
  {
    path: '/student/assignment',
    name: 'assignment',
    component: () => import('./views/assignment.vue')
  },
  {
    path: '/student/grades',
    name: 'grades',
    component: () => import('./views/grades.vue')
  },
  {
    path: '/student/page-1',
    name: 'page-1',
    component: () => import('./views/page-1.vue')
  },
  {
    path: '/student/page-2',
    name: 'page-2',
    component: () => import('./views/page-2.vue')
  },
  {
    path: '/student/syllabus',
    name: 'syllabus',
    component: () => import('./views/syllabus.vue')
  },  
  {
    path: '/student/groups',
    name: 'groups',
    component: () => import('./views/groups.vue')
  }, 

]