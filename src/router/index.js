import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonnagesView from '../views/PersonnagesView.vue'
import CompteurView from '../views/CompteurView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    {
      path: '/personnages',
      name: 'personnages',
      component: () => PersonnagesView
    },
  

    {
      path: '/compteur',
      name: 'compteur',
      component: () => CompteurView
    }
  ]

})

export default router
