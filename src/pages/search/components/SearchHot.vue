<template>
  <div  v-show="isShow" class="search-hot-main">
    <!-- 历史搜索 -->
    <div>
      <div class="search-history show">
        <span class="search-history-title show">搜索历史</span>
        <div class="search-history-delete-wrapper show">
          <span class="iconfont show">&#xe601;</span>
          <span class="search-history-delete show">清除</span>
        </div>
      </div>
      <div>
        content
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="search-hot show">
      <span class="search-hot-title show">热门搜索</span>
      <div class="search-hot-change-wrapper show">
        <span class="iconfont show">&#xe6aa;</span>
        <span class="search-hot-change show" >换一批</span>
      </div>
    </div>
    <div class="recommend-spots-cities show">
      <div class="recommend-spots-wrapper show">
        <div class="recommend-spots-icon show">
          <div class="recommend-spots-icon-wrapper show">
            <span class="iconfont recommend-icon show">&#xe607;</span>
          </div>
        </div>
        <div class="recommend-spots-items show">
          <a href="#" class="recommend-spots-item" @click="joinToHistory">金秋旅行嘉年华</a>
          <a href="#" class="recommend-spots-item" @click="joinToHistory">1元门票</a>
          <a href="#" class="recommend-spots-item" @click="joinToHistory">清新黔江</a>
          <a href="#" class="recommend-spots-item" @click="joinToHistory">全国网红景点</a>
          <a href="#" class="recommend-spots-item" @click="joinToHistory">都江堰</a>
          <a href="#" class="recommend-spots-item" @click="joinToHistory">成都武侯祠</a>
        </div>
      </div>
      <div class="recommend-cities-wrapper show">
        <div class="recommend-cities-icon show">
          <div class="recommend-cities-icon-wrapper show">
            <span class="iconfont recommend-icon show">&#xe62f;</span>
          </div>
        </div>
        <div class="recommend-cities-items show">
          <a href="#" class="recommend-cities-item">绵阳</a>
          <a href="#" class="recommend-cities-item">彭州市</a>
          <a href="#" class="recommend-cities-item">重庆</a>
          <a href="#" class="recommend-cities-item">邛崃市</a>
        </div>
      </div>
    </div>
    <div class="search-button-wrapper show">
      <button class="search-button">搜索身边景点</button>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: 'SearchHot',
  props: {
    show: Boolean
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    joinToHistory () {
      console.log('1')
    }
  },
  watch: {
    show: function () {
      this.isShow = this.show
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search-hot-main
    background-color:#fff
    z-index 99
    .search-history
      width 100%
      height .64rem
      line-height .64rem
      border-bottom .01rem solid #ccc
      color #888
      background-color #f0f5f6
      font-size .26rem
      .search-history-title
        padding 0 .2rem
      .search-history-delete-wrapper
        float right
        color #00afc7
        padding 0 .2rem
        cursor:pointer
    .search-hot
      width 100%
      height .64rem
      line-height .64rem
      border-bottom .01rem solid #ccc
      color #888
      background-color #f0f5f6
      font-size .26rem
      .search-hot-title
        padding 0 .2rem
      .search-hot-change-wrapper
        float right
        color #00afc7
        padding 0 .2rem
        cursor:pointer
    .recommend-spots-cities
      .recommend-spots-wrapper
        width 100%
        height 2.2rem
        overflow hidden
        border-bottom solid 1px #ccc
        .recommend-spots-icon
          width 1.1rem
          height 2.2rem
          float left
          display flex
          flex-direction column
          justify-content center
          align-items center
          color #ccc
          .recommend-spots-icon-wrapper
            height 70%
            width 1.1rem
            display flex
            flex-direction column
            justify-content center
            align-items center
            border-right solid 1px #dce5e7
            .recommend-icon
              font-size .45rem
        .recommend-spots-items
          height 2.2rem
          .recommend-spots-item
            display inline-block
            float left
            height .36rem
            line-height .36rem
            max-width 2.89rem
            text-align center
            padding-left .3rem
            padding-right .3rem
            margin .35rem 0
            border-right 1px dashed #c9cccd
            color #333
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
      .recommend-cities-wrapper
        width 100%
        height 1.1rem
        overflow hidden
        border-bottom solid 1px #ccc
        .recommend-cities-icon
          width 1.1rem
          height 1.1rem
          display flex
          flex-direction column
          justify-content center
          align-items center
          float left
          .recommend-cities-icon-wrapper
            height 70%
            width 1.1rem
            display flex
            flex-direction column
            justify-content center
            align-items center
            border-right solid 1px #dce5e7
            .recommend-icon
              color #ccc
              font-size .45rem
        .recommend-cities-items
          height 1.1rem
          .recommend-cities-item
            display inline-block
            float left
            height .36rem
            line-height .36rem
            max-width 2.89rem
            text-align center
            padding-left .3rem
            padding-right .3rem
            border-right 1px dashed #c9cccd
            color #333
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin .35rem 0
    .search-button-wrapper
      width 100%
      height 1.22rem
      text-align center
      border-bottom 1px solid #888
      border-image: linear-gradient( #ccc , #888) 60 30
      .search-button
        font-family Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif
        width 90%
        margin .25rem auto
        height .72rem
        line-height .72rem
        background-color #ffffff
        text-align center
        font-size .28rem
        color #333
        border 1px solid #dde1e3
        border-radius 2px
</style>
