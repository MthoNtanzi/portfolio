import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/:catchAll(.*)', // fallback for all routes
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router