<template>
  <div  v-show="isShow" class="search-hot-main">
    <!-- 历史搜索 -->
    <div v-show="transferArray.length">
      <div class="search-history show">
        <span class="search-history-title show">搜索历史</span>
        <div class="search-history-delete-wrapper show">
          <span class="iconfont show">&#xe601;</span>
          <span class="search-history-delete show" @click="deleteSearchHistory">清除</span>
        </div>
      </div>
      <div class="search-history-items-wrapper show">
        <a
          v-for="(item, index) in searchHistoryArray" :key="index"
          :href="item.href"
          class="search-history-item"
        >{{item.name}}</a>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="search-hot show">
      <span class="search-hot-title show">热门搜索</span>
      <div class="search-hot-change-wrapper show">
        <span class="iconfont show">&#xe6aa;</span>
        <span class="search-hot-change show" @click="changeArray">换一批</span>
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
          <a
          v-for="(item,index) of recommendSpotsitems"
          :href="item.href"
          :key="index"
          class="recommend-spots-item"
          @click="joinToHistory"
        >{{item.name}}</a>
        </div>
      </div>
      <div class="recommend-cities-wrapper show">
        <div class="recommend-cities-icon show">
          <div class="recommend-cities-icon-wrapper show">
            <span class="iconfont recommend-icon show">&#xe62f;</span>
          </div>
        </div>
        <div class="recommend-cities-items show">
          <a href="#" class="recommend-cities-item" @click="joinToHistory">绵阳</a>
          <a href="#" class="recommend-cities-item" @click="joinToHistory">彭州市</a>
          <a href="#" class="recommend-cities-item" @click="joinToHistory">重庆</a>
          <a href="#" class="recommend-cities-item" @click="joinToHistory">邛崃市</a>
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
      isShow: false,
      transferArray: [],
      recommendSpotsArray: [
        {
          hraf: '#',
          name: '金秋旅行嘉年华'
        },
        {
          hraf: '#',
          name: '国色天乡·童话世界'
        },
        {
          hraf: '#',
          name: '三星堆'
        },
        {
          hraf: '#',
          name: '碧峰峡'
        },
        {
          hraf: '#',
          name: '南湖梦幻岛'
        },
        {
          hraf: '#',
          name: '1元门票'
        },
        {
          hraf: '#',
          name: '成都武侯祠'
        },
        {
          hraf: '#',
          name: '都江堰'
        },
        {
          hraf: '#',
          name: '清新黔江'
        },
        {
          hraf: '#',
          name: '漫花庄园'
        },
        {
          hraf: '#',
          name: '峨眉山'
        },
        {
          hraf: '#',
          name: '西岭雪山'
        },
        {
          hraf: '#',
          name: '乐山大佛'
        },
        {
          hraf: '#',
          name: '西岭雪山滑雪场'
        },
        {
          hraf: '#',
          name: '成都欢乐谷'
        },
        {
          hraf: '#',
          name: '都江堰熊猫乐园'
        },
        {
          hraf: '#',
          name: '国色天乡·陆地乐园'
        }
      ]
    }
  },
  methods: {
    joinToHistory (e) {
      let a = []
      this.transferArray.forEach(element => {
        a.push(element.name)
      })
      if (a.indexOf(e.target.innerText) === -1) {
        this.transferArray.unshift(
          {
            hraf: '#',
            name: e.target.innerText
          }
        )
        // 转化数组为字符串保存在storage中
        let str = JSON.stringify(this.transferArray)
        let storage = window.sessionStorage
        storage.setItem('searchHistory', str)
      }
    },
    deleteSearchHistory () {
      let storage = window.sessionStorage
      storage.removeItem('searchHistory')
      this.transferArray.splice(0, this.transferArray.length)
    },
    changeArray () {
      let arr = this.recommendSpotsArray
      arr.sort(function () {
        return (0.5 - Math.random())
      })
    }
  },
  computed: {
    searchHistoryArray () {
      let searchHistoryArray = []
      let this_ = this
      let storage = window.sessionStorage
      // storage里面是字符串转化成数组
      let options = JSON.parse(storage.getItem('searchHistory'))
      if (options) {
        this_.transferArray = options
      }
      searchHistoryArray = this_.transferArray
      if (searchHistoryArray.length > 8) {
        searchHistoryArray.pop()
      }
      return searchHistoryArray
    },
    recommendSpotsitems () {
      let recommendSpotsitems = []
      recommendSpotsitems = this.recommendSpotsArray
      return recommendSpotsitems
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
    .search-history-items-wrapper
      width 100%
      height 1.24rem
      line-height 1.24rem
      padding .1rem 0
      white-space nowrap
      overflow-x scroll
      background-color #ffffff
      border-bottom 1px solid #dce5e7
      .search-history-item
        display inline-block
        height .6rem
        line-height .6rem
        max-width 1.5rem
        overflow hidden
        text-overflow ellipsis
        font-size .26rem
        color #333
        background-color #ffffff
        padding 0 .15rem
        text-align center
        margin-top .25 rem
        margin-left .2rem
        border 1px solid #c9cccd
        border-radius 3px
        white-space nowrap
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
