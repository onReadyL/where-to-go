// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目的入口文件
import Vue from 'vue'
import App from './App'
// 路由：根据网址的不同，返回不同的内容给用户
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App: App },
  template: '<App/>'
})
