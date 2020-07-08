import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Landing'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
