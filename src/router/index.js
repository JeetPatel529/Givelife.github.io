import { createRouter, createWebHistory } from 'vue-router'
import GiveLife from '../views/GiveLife.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'GiveLife',
      component: GiveLife
    },
  ]
})

export default router
