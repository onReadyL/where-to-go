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
