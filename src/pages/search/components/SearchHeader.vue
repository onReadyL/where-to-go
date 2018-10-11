<template>
  <div class="search-header">
    <router-link
      to="/"
      class="search-header-left"
    >
      <div class="iconfont search-back-icon">&#xe624;</div>
    </router-link>
    <div class="search-header-input-wrapper">
      <input
        class="search-header-input show"
        type="text"
        placeholder="输入城市或景点"
      >
    </div>
    <span class="search-header-right">
      <a class="search-header-right-submit" href="#">搜索</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
  data () {
    return {
      timer: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search-header
    display flex
    width 100%
    line-height .86rem
    text-align center
    background-color #fff
    z-index 99
    .search-header-left
      width .6rem
      width .64rem
      float left
      color #616161
      .search-back-icon
        text-align center
        font-size .4rem
    .search-header-input-wrapper
      height .64rem
      line-height .64rem
      margin-top .13rem
      background: #f2f2f2
      color: #212121
      box-sizing: border-box;
      box-flex: 1
      flex 1
      margin-right .2rem
      border-radius: .3rem
      .search-header-input
        width 90%
        background: #f2f2f2
        height .6rem
        line-height .6rem
        text-align center
    .search-header-right
      display inline-block
      height .64rem
      line-height .64rem
      padding .12rem 0
      margin-right .2rem
      .search-header-right-submit
        color #616161
</style>
