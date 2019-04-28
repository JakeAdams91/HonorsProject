<template>
  <v-toolbar
    app
    dark
    clipped-left
    color="primary"
  >
    <v-toolbar-title>{{ getPath }}</v-toolbar-title>
    <v-spacer />
      <v-btn flat @click="routePath('Home')">Home</v-btn>
      <v-btn flat @click="routePath('Structure')">File Structure</v-btn>
      <v-btn flat @click="routePath('Dynamic')">Dynamic Rendering</v-btn>
      <v-toolbar-title class="caption font-weight-bold mt-4">Jake Adams</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    routePath (path) {
      if(path === 'Home') {
        this.$store.commit('setPath', 'Home')
        this.$vuetify.goTo(0)
      } else if(path === 'Dynamic') {
        this.$store.commit('setPath', 'Dynamic Rendering')
        this.$vuetify.goTo(0)
      } else if (path === 'Structure'){
        this.$store.commit('setPath', 'File Structure')
        this.$vuetify.goTo(0)
      }
    }
  },
  computed: {
    getPath () {
      return this.$store.getters.getPath
    }
    
  }
}
</script>