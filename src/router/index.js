import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import InfraStructure from '../views/InfraStructure'
import Resources from '../views/Resources'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resources
  },
  {
    path: '/infra',
    name: 'infra',
    component: InfraStructure
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
