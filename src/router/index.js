import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import CanvasCtrl from '../views/CanvasCtrl.vue'
import PageBuilder from '../views/PageBuilder.vue'
import EventCalendar from '../views/EventCalendar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/canvas',
    name: 'CanvasCtrl',
    component: CanvasCtrl
  },
  {
    path: '/page-builder',
    name: 'PageBuilder',
    component: PageBuilder
  },
  {
    path: '/event-calendar',
    name: 'EventCalendar',
    component: EventCalendar
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve(() => {
  // If this isn't an initial page load.
  //if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  //}
 // next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
