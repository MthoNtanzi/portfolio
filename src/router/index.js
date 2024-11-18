import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutMe.vue'
import Education from '../views/Education.vue'
// import Games from '../views/Games.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {path: '/about', name: 'about', component: About},
    {path: '/education', name: 'education', component: Education},
    // {path: '/games', name: 'games', component: Games},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/projects', name: 'projects', component: Projects},
  ]
})

export default router
