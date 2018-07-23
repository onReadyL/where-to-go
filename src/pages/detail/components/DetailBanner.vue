<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        :src="this.bannerImg"
        @click="showPicL"
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe600;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      v-show="showPicS"
      @hide="hidePics"
      :imgs="gallaryImgs"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showPicS: false
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
