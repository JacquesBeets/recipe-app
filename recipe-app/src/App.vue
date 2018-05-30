<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <rbk-nav-bar></rbk-nav-bar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    'rbk-nav-bar': Navbar
  }
}
</script>

<style>

</style>
