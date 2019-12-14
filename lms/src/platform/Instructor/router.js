 
import Vue from 'vue'
import Router from 'vue-router'

import dashboard from './views/dashboard.vue'
import login from './views/auth/login.vue'
import forgot from './views/auth/forgot.vue'
import home from './views/course/id/home.vue'
import fileRepository from './views/repo/repository.vue'

import ViewStudents from './views/students/students.vue'

Vue.use(Router)

export default [
  {
    path: '/instructor',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/instructor/all-courses',
    name: 'all_courses',
    component:() => import ('./views/course/all_courses.vue')
  },
  {
    path: '/instructor/calendar',
    name: 'calendar',
    component: () => import('./views/calendar.vue')
  },
  {
    path: '/instructor/test',
    name: 'test',
    component: () => import('./views/course/test.vue')
  },
  {
    path: '/instructor/test2',
    name: 'test2',
    component: () => import('./views/course/test2.vue')
  },
  {
    path: '/instructor/login',
    name: 'login',
    component: login
  },
  {
    path: '/instructor/forgot',
    name: 'forgot',
    component: forgot
  },
  //View Course
  {
    path: '/instructor/home',
    name: 'home',
    component: home
  },
  {
    path: '/instructor/profile',
    name: 'profile',
    component: () => import('./views/profile.vue')
  },
  {
    path: '/instructor/files',
    name: 'files',
    component: () => import('./views/course/files/files.vue')
  },
  {
    path: '/instructor/repository',
    name: 'fileRepository',
    component: fileRepository
  },
  {
    path: '/instructor/course_material',
    name: 'course_material',
    component: () => import('./views/course/notes/course_material.vue')
  },
  {
    path: '/instructor/course_material/id',
    name: 'course_material',
    component: () => import('./views/course/notes/id/course_material.vue')
  },
  {
    path: '/instructor/assignments',
    name: 'assignments',
    component: () => import('./views/course/activities/assignments.vue')
  },
  {
    path: '/instructor/assignment',
    name: 'assignment',
    component: () => import('./views/course/activities/id/assignment.vue')
  },
  {
    path: '/instructor/assignment/view-submitted',
    name: 'assignment',
    component: () => import('./views/course/activities/mark/view_submitted_all.vue')
  },
  {
    path: '/instructor/students',
    name: 'students',
    component: ViewStudents
  },
  {
    path: '/instructor/notes/page-1',
    name: 'page-1',
    component: () => import('./views/course/notes/id/page-1.vue')
  },
  {
    path: '/instructor/notes/page-2',
    name: 'page-2',
    component: () => import('./views/course/notes/id/page-2.vue')
  },
  {
    path: '/instructor/notes/page-3',
    name: 'page-3',
    component: () => import('./views/course/notes/id/page-3.vue')
  },
  {
    path: '/instructor/notes/video-1',
    name: 'page-3',
    component: () => import('./views/course/notes/media/video/video-1.vue')
  },
  {
    path: '/instructor/syllabus',
    name: 'syllabus',
    component: () => import('./views/course/syllabus.vue')
  },  
  {
    path: '/instructor/groups',
    name: 'groups',
    component: () => import('./views/course/groups.vue')
  }, 

]