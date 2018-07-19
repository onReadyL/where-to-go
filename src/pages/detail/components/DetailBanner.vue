<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg"
        @click="showPicL"
      />
      <div class="banner-info">
        <div class="banner-title">成都海昌极地海洋公园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe600;</span>
          {{this.imgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      v-show="showPicS"
      @hide="hidePics"
      :imgs="imgs"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showPicS: false,
      imgs: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_350x240_71887875.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/c1/c14c2639b55cf054a3.img.jpg_350x240_b7449c07.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/2b/2b4d54c3260ba4b2a3.img.jpg_350x240_a3a29bf5.jpg'
        }
      ]
    }
  },
  components: {
    CommonGallary: CommonGallary
  },
  methods: {
    showPicL () {
      this.showPicS = true
    },
    hidePics () {
      this.showPicS = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .banner
    overflow hidden
    position relative
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
        ellipsis()
      .banner-number
        height .32ren
        line-height .32rem
        padding .14rem .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
