import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'category/:id',
          name: 'category',
          component: () => import("@/views/Category/index.vue")
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import("@/views/SubCategory/index.vue")
        },
        {
          path: 'detail:/:id',
          name: 'detail',
          component: () => import("@/views/Detail/index.vue")
        },
        {
          path: 'cartlist',
          name: 'cartlist',
          component: () => import("@/views/CartList/index.vue")
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login/index.vue")
    }
  ],
  scrollBehavior () {
    // return 期望滚动到哪个的位置
    return { top: 0 }
  }
})

export default router
