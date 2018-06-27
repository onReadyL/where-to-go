<template>
  <div>
    <home-header></home-header>
    <div class="home">home</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader
  }
}

</script>

<style>
  .home {
    font-size: 28px;
  }
  .link {
    text-decoration: none;
  }
</style>
