import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './main/system/login/login'
import User from './main/system/user/user'
import Menu from './main/system/menu/menu'
import Home from './main/system/home/home'
const routes = [
  Login,
  User,
  Menu,
  Home,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=>(import('@/components/NotFound.vue'))
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
