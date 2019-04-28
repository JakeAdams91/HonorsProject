<template>
  <v-app id="app">
    <top-nav/>
    <v-content>
      <home v-if="getPath === 'Home'"/>
      <why-vue v-if="getPath === 'Home'"/>
      <vue-benefits v-if="getPath === 'Dynamic Rendering'" />
      <file-structure v-if="getPath === 'File Structure'"/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'
import WhyVue from './components/WhyVue.vue'
import TopNav from './components/TopNav.vue'
import VueBenefits from './components/VueBenefits.vue'
import FileStructure from './components/FileStructure.vue'
export default {
  name: 'app',
  components: {
    TopNav,
    Home,
    WhyVue,
    VueBenefits,
    FileStructure
  },
  computed: {
    getPath() {
      return this.$store.getters.getPath
    }
  }
}
</script>

<style>
  #app {
    background-color: #686D72;
  }

  .bgc {
    background-color: #ECEFF1 !important;
  }
  .greener {
    color: green
  }
  .purpler {
    /* margin-left: 10%; */
    color: #cc38ed;
  }
  .brownr {
    color: #a5300d;
  }
  .bluer {
    color: #3554dd;
  }
  .blackr {
    color: black;
  }
  .center {
    text-align: center;
  }
  .centerize {
    margin-left: auto;
    margin-right: auto;
  }
  .coder {
    width: 100% !important;
  }
</style>
