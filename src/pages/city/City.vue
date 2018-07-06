<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
</div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/CitySearch.vue'
export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
