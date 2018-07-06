<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont city-back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgcolor
    font-size .4rem
    .city-back-icon
      position absolute
      left 0
      top 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
