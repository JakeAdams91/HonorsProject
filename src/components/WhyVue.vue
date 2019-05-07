<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-card class="bgc">
          <v-card-title class="display-1">
            Why Vue?
          </v-card-title>
          <v-divider />
          <v-card-text class="subheading">
            <v-list class="bgc">
              <v-list-tile>
                <v-list-tile-title>
                  Vue.js is optimized for progessive integration, meaning you can create a single vue file and drop it into 
                  a major site as a standalone page / feature
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  Can also be used to create extremely complex, full scale web sites.
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  Add's structure and utilties, which allows what was a small project grow into a large, dynamic site with ease.
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  A well integrated EcoSystem, that includes pre built libraries such as Vuex, or Vue Router.
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  Allows for dynamic data rendering, cutting duplicate code.
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  Can be loaded as a resource of in a HTML page; allowing you to easily use Vue without any installation process.
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  Reactivity, can automatically update the DOM when changes are made.
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
            <!-- <v-btn color="primary" @click="newPath">EXAMPLES</v-btn> -->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'WhyVue',
  methods: {
    newPath () {
      this.$store.commit('setPath', 'Examples')
    }
  }
}
</script>
