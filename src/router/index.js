import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello'
import Impressum from '../views/Impressum'
import Wishes from '../views/Wishes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/wishes',
    name: 'wishes',
    component: Wishes
  },
  {
    path: '/impressum',
    name: 'imprssum',
    component: Impressum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
