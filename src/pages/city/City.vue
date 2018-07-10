<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
  <city-alphabet></city-alphabet>
</div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
