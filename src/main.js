// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目的入口文件
import Vue from 'vue'
import App from './App'
// 路由：根据网址的不同，返回不同的内容给用户
import router from './router'
// 安装了fastClick包
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 调用faskClick里面的attach方法
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App: App },
  template: '<App/>'
})
