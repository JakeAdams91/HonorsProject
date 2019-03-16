<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-card flat>
          <v-card-title class="title">
            What are Javascript Frameworks?
          </v-card-title>
          <v-divider />
          <v-card-text>
            Though the various Javascript Frameworks abilities and features vary greatly, one thing is still true of them.
            A Framework is just a compilation of various pre-built features to speed up the development time and quality of websites.
            Prior to good Frameworks a developer had to code everything from complete scratch (unless he/she kept a repo of pre-coded items such as a nav-bar)
            Frameworks just combine all the best stuff and allow for flexibility for unique designs etc.
            Thinking of frameworks in a construction analogy, a Carpenter does not fall the tree, let it dry then mill it into useable planks to build a home, instead he purchases pre milled, kiln dried lumber
            to speed up construction process. Javascript Frameworks are your pre-milled lumber, brick, and concrete. It's up to you and your skill to know how to use these building materials, however.
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- experimental -->
      <!-- <v-layout row wrap> -->
      <v-flex d-flex xs3>
            <v-card flat>
              <v-card-title class="title">
                Javascript Frameworks 
              </v-card-title>
              <v-divider />
              <v-card-text>
                A few of the many JS Frameworks<v-spacer />
                React.js <v-spacer />
                Vue.js <v-spacer />
                Angular.js <v-spacer />
                Preact.js <v-spacer />
                Ember.js <v-spacer />
                Polymer.js <v-spacer />
              </v-card-text>
              <!-- <v-parallax height="700" :src="require('../assets/sideII.jpg')"></v-parallax> -->
            </v-card>
          </v-flex>
          <v-flex xs9>
            <stepper-chart />
          </v-flex>
      <!-- </v-layout> -->
      <!-- experimental -->

    </v-layout>
  </v-container>
</template>

<script>
import StepperChart from './StepperChart'
export default {
  name: 'Home',
  components: {
    StepperChart
  }
}
</script>


<style scoped>
</style>
