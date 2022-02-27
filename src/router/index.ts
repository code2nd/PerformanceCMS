import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// import storage from '@/utils/storage'
import { LStorage } from '@/utils/wystorage'
import { firstMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/components/page-layout')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/notFound/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 路由守卫
router.beforeEach((to) => {
  const token = LStorage.get('token')
  if (to.path !== '/login') {
    // 不是登录页就校验是否已经登录，没登录就跳转到登录页
    if (!token) {
      return '/login'
    }
  } else {
    // 是登录页且已经登录就跳转首页
    if (token) {
      return '/home'
    }
  }

  if (to.path === '/') {
    return firstMenu
  }

  // 查询参数置空
  LStorage.set('queryParameters', '')
})

export default router
