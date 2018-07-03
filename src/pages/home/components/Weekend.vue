<template>
  <div>
    <div class="recommend-title">
    周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL">
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必游TOP10',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0002',
          imgURL: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          title: '远离烧烤模式',
          desc: '周末还在搓麻将？快出门赏美景'
        },
        {
          id: '0003',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
          title: '慢游成都最美古镇',
          desc: '撷取一份悠闲，寻觅散落在时光里的幸福'
        },
        {
          id: '0004',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
          title: '玩转主题乐园',
          desc: '乐园，与青春作伴'
        },
        {
          id: '0005',
          imgURL: 'http://img1.qunarzz.com/sight/source/1505/b8/e6206794272459.jpg_r_640x214_a002ded9.jpg',
          title: '郊野户外深呼吸',
          desc: '做个久违的深呼吸，来一场清肺之旅'
        },
        {
          id: '0006',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '成都海昌极地海洋公园....'
        },
        {
          id: '0007',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '成都海昌极地海洋公园....'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
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
