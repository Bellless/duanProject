import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import twoDay from '../views/twoDay.vue'

Vue.use(VueRouter)

const routes = [
  // 在vue所有的页面跳转都需要在router文件目录下的index.js里面来进行配置路由跳转规则
  // 如果 你页面写好了 但是没有在里面配置规则 你是不能够显示页面的
  // 不是像html一样用a标签直接加href来跳
  {
    // /  >>根目录 就是这个项目启动的时候访问的第一个页面
    // 根目录只有一个
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/oneDay',
    name: 'oneDay',
    component: () => import( /* webpackChunkName: "about" */ '../views/oneDay.vue')
  },
  {
    // path  我们在浏览器中访问的地址
    path: '/twoDay',
    // name  就是我们router-link中的路径
    name: 'twoDay',
    // component 就相当于href 你要跳转的路径
    component: twoDay
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router