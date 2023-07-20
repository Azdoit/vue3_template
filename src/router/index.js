import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const routes = [
  {
    path: '/',
    component: HelloWorld,
    name: 'HelloWorld',
    meta: {},
    children: []
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
