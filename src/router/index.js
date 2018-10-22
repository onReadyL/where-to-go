import Vue from 'vue'
import Router from 'vue-router'
// @符号指的SRC的目录

Vue.use(Router)

// 路由配置
// 设置异步加载
// import函数返回一个promise
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => { require(['@/pages/home/Home.vue'], resolve) }
      // () => import('@/pages/home/Home.vue')
    },
    {
      path: '/city',
      name: 'City',
      component: (resolve) => { require(['@/pages/city/City.vue'], resolve) }
      // () => import('@/pages/city/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: (resolve) => { require(['@/pages/detail/Detail.vue'], resolve) }
      // () => import('@/pages/detail/Detail.vue')
    },
    {
      path: '/search/:id',
      name: 'Search',
      component: () => import('@/pages/search/Search.vue')
    }
  ],
  // 通过路由跳转之后回到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
