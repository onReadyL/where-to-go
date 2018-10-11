<template>
  <div id="app" class="app">
    <!-- 路由被加载后放入内存中 -->
    <keep-alive>
      <!-- 显示当前 路由地址 对应的内容 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" >
.app
  height 100%
</style>
