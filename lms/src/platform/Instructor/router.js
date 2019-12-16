 
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
    path: '/instructor/quiz',
    name: 'quiz-menu',
    component: () => import('./views/quizs/quiz_manu.vue')
  },
  {
    path: '/instructor/quiz/quiz-1',
    name: 'quiz-1',
    component: () => import('./views/quizs/list/quiz_id.vue')
  },
  {
    path: '/instructor/quiz/quiz-2',
    name: 'quiz-2',
    component: () => import('./views/quizs/list/quiz_id_2.vue')
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
    path: '/instructor/assignment_1',
    name: 'assignment-1',
    component: () => import('./views/course/activities/id/assignment_1.vue')
  },
  {
    path: '/instructor/assignment_2',
    name: 'assignment-2',
    component: () => import('./views/course/activities/id/assignment_2.vue')
  },
  {
    path: '/instructor/assignment_3',
    name: 'assignment-3',
    component: () => import('./views/course/activities/id/assignment_3.vue')
  },

  // marks
  {
    path: '/instructor/marks/all-view-submitted',
    name: 'marks',
    component: () => import('./views/course/activities/mark_1/view_submitted_all.vue')
  },

  {
    path: '/instructor/marks/all-view-submitted/student_id',
    name: 'marks',
    component: () => import('./views/course/activities/mark_1/id/submitted.vue')
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