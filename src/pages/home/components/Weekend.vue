<template>
  <div>
    <div class="recommend-title">
    周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of weekend" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekend: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
    .item-title
      overflow: hidden;
      padding-right: 1.4rem;
      color: #212121;
      font-size: .28rem;
      ellipsis()
    .item-desc
      overflow: hidden;
      padding-right: 1.4rem;
      color: #616161;
      font-size: .24rem;
      line-height: .42rem;
      ellipsis()
</style>
