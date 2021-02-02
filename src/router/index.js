import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ongoing from '../views/Ongoing.vue'
import Done from '../views/Done.vue'
import Trashed from '../views/Trashed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/issues/open',
    name: 'Ongoing',
    component: Ongoing
  },
  {
    path: '/issues/done',
    name: 'Done',
    component: Done
  },
  {
    path: '/issues/trashed',
    name: 'Trashed',
    component: Trashed
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
