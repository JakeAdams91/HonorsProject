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
            Vue.js is optimized for progessive integration, meaning you can create a single vue file and drop it into 
            a major site as a standalone page / feature,
            or create an entirely new site with just vue. it's flexibility is what makes it really shine.
            Along with this, Vue boasts a certain ease of use that many Frameworks lack, 
            unlike React, you don't have to understand JSX or any other preprocessors.
            You simple need to know HTML, Javascript, and CSS.
            Though i would recommend a medium level understanding of Javascript as it is a Javascript based framework.
            Some of Vue's best attribues:
            
            <v-list class="bgc">
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
