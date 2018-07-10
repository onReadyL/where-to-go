<template>
  <ul class="letter-list">
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
    <li class="letter-list-item">A</li>
  </ul> 
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .letter-list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 0
    bottom 0
    width .4rem
    .letter-list-item
      line-height .4rem
      text-align center
      color $bgColor
</style>
