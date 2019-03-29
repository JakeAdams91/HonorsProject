<template>
  <v-app id="app">
    <top-nav/>
    <v-content>
      <home />
      <why-vue />
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'
import WhyVue from './components/WhyVue.vue'
import TopNav from './components/TopNav.vue'
export default {
  name: 'app',
  components: {
    TopNav,
    Home,
    WhyVue
  }
}
</script>

<style>
  #app {
    background-color: #ECEFF1;
  }
</style>
