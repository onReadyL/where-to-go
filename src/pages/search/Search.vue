<template>
  <div class="search-main">
    <div class="bg-search"></div>
    <search-header></search-header>
    <search-hot :show="show"></search-hot>
  </div>
</template>

<script>
import SearchHeader from './components/SearchHeader.vue'
import SearchHot from './components/SearchHot.vue'
export default {
  name: 'Search',
  data () {
    return {
      show: null,
      lastclick: '12'
    }
  },
  methods: {
    isShow (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 判断是否点击的同一个元素
      if (e.target.className !== this.lastclick) {
        this.timer = setTimeout(() => {
          if (e.target.className.indexOf('show') !== -1) {
            this.show = true
          } else {
            this.show = false
          }
        }, 50)
      }
      this.lastclick = e.target.className
    }
  },
  activated () {
    window.addEventListener('click', this.isShow)
  },
  deactivated () {
    window.removeEventListener('click', this.isShow)
  },
  components: {
    SearchHeader: SearchHeader,
    SearchHot: SearchHot
  }
}
</script>

<style lang="stylus" scoped>
  // 设置背景
  .search-main
    position relative
    width 100%
    height 100%
    overflow hidden
    .bg-search
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      background-color #f2f2f2
      z-index -1
</style>
