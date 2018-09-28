# where-to-go

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---------------------------------
 处理移动端click事件300毫秒延迟

 npm install fastclick --save

兼容性：

    iOS 3及更高版本的移动Safari
    iOS 5及更高版本的Chrome
    Android上的Chrome（ICS）
    Opera Mobile 11.5及以上版本
    Android 2以来的Android浏览器
    PlayBook OS 1及以上版本

随后在main.js中加入：

import FastClick from 'fastclick'

FastClick.attach(document.body);

---------------------------------
安装stylus的依赖包
npm install stylus --save

npm install stylus-loader --save

---------------------------------
安装vue-awesome-swiper
npm install vue-awesome-swiper@2.6.7 --save

全局引入（main.js）
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

---------------------------------
安装axios
npm install axios --save

---------------------------------
安装BetterScroll
npm install better-scroll --save

引入
import Bscroll from 'better-scroll'
const wrapper = document.querySelector('.wrapper')
const scroll = new BScroll(wrapper)

---------------------------------
安装vuex
npm install vuex --save

---------------------------------
处理手机测试touchstart的bug
touchstart.prevent

---------------------------------
解决低版本Android不支持promise的bug
引入：babel-polyfill
npm install babel-polyfill --save
main.js:
    import 'babel-polyfill'

---------------------------------
搞不定在线演示！！！数据也没有传上来
折腾过虚拟主机！