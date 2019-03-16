<template>
  <v-app id="app">
    <top-nav/>
    <v-content>
      <home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'
import TopNav from './components/TopNav.vue'
export default {
  name: 'app',
  components: {
    TopNav,
    Home
  }
}
</script>

<style>
</style>
