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
// import BMap from 'BMap'
export default {
  name: 'App'
  // ,
  // mounted () {
  //   if (!localStorage.getItem('currentCity')) {
  //     var geolocation = new BMap.Geolocation()
  //     geolocation.getCurrentPosition(function (r) {
  //       var status = 'BMAP_STATUS_SUCCESS'
  //       if (this.getStatus() === status) {
  //         let currentLon = r.point.lng
  //         let currentLat = r.point.lat
  //         let pt = new BMap.Point(currentLon, currentLat)
  //         let geoc = new BMap.Geocoder()
  //         geoc.getLocation(pt, function (rs) {
  //           let addComp = rs.addressComponents
  //           let currentCity = addComp.city
  //           localStorage.setItem('currentCity', currentCity)
  //         })
  //       }
  //     })
  //   }
  // }
}
</script>

<style lang="stylus" >
.app
  height 100%
</style>
