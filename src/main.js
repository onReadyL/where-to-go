// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目的入口文件
import Vue from 'vue'
import App from './App'
// 路由：根据网址的不同，返回不同的内容给用户
import router from './router'
// 安装了fastClick包
import fastClick from 'fastclick'
// 引入vue-awesome-swiper文件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入vuex文件
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 调用faskClick里面的attach方法
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App: App },
  template: '<App/>'
})
