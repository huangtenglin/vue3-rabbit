import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Layout'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home')
        },
        {
          path: 'category',
          name: 'category',
          component: () => import("@/views/Category")
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login")
    }
  ]
})

export default router
