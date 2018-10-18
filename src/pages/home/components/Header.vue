<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <router-link
        :to="'/search/' + this.$store.state.city"
      >
        <span class="iconfont">&#xe632;</span>
        <input type="text" class="header-input-btn" placeholder="输入景点" v-model="headerInput">
      </router-link>
    </div>
    <router-link to="/city">
      <div class="header-right">
      {{this.$store.state.city | handleCity}}
      <span class="iconfont down-icon">&#xe65e;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'HomeHeader',
  data () {
    return {
      headerInput: ''
    }
  },
  beforeMount () {
    var this_ = this
    if (!localStorage.getItem('currentCity')) {
      let myCity = new BMap.LocalCity()
      myCity.get((result) => {
        this_.$store.dispatch('changeCity', result.name)
      })
      // var geolocation = new BMap.Geolocation()
      // geolocation.getCurrentPosition(function (r) {
      //   var status = 'BMAP_STATUS_SUCCESS'
      //   if (this.getStatus() === status) {
      //     let currentLon = r.point.lng
      //     let currentLat = r.point.lat
      //     let pt = new BMap.Point(currentLon, currentLat)
      //     let geoc = new BMap.Geocoder()
      //     geoc.getLocation(pt, function (rs) {
      //       let addComp = rs.addressComponents
      //       let currentCity = addComp.city
      //       localStorage.setItem('currentCity', currentCity)
      //     })
      //   }
      // })
    }
  },
  activated () {
    this.headerInput = ''
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height .86rem
    background-color $bgcolor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      overflow hidden
      flex: 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
      .header-input-btn
        font-size 16px
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .down-icon
        font-size .24rem

</style>
