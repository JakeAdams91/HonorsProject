<template>
  <v-toolbar
    app
    dark
    clipped-left
    color="primary"
  >
    <v-toolbar-title>{{ getPath }}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title class="caption font-weight-bold mt-4">Jake Adams</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
  },
  computed: {
    getPath () {
      return this.$store.getters.getPath
    },
    route (path) {
      if(path === 'Home') {
        this.$store.commit('setPath', 'Home')
      } else if(path === 'Installation') {
        this.$store.commit('setPath', 'Installation Guide')
      } else {
        this.$store.commit('setPath', 'Cheat-Sheet')
      }
      this.$store.commit('toggleNavigationDisplay')
    }
  }
}
</script>