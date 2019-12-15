import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/** **/

/**
* These are the routes to the landing page
**/
import Home from '../platform/Landingpage/views/Home.vue'

/**
* The are are routes modules
**/
import StudentRoutes from '../platform/Student/router'
import InstructorRoutes from '../platform/Instructor/router'

const baseRoutes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]

const routes = baseRoutes.concat(StudentRoutes, InstructorRoutes)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router