<template>
  <v-container grid-list-md fluid class="ma-0 pa-0">
    <v-layout row wrap>
      <v-stepper v-model="el">
        <v-stepper-header>
          <v-stepper-step :complete="el > 1" step="1">
            React.js
          </v-stepper-step>
          <v-divider/>
          <v-stepper-step :complete="el > 2" step="2">
            Angular.js
          </v-stepper-step>
          <v-divider />
          <v-stepper-step :complete="el > 3" step="3">
            Vue.js
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card flat>
              <v-layout row>
                <v-flex xs2 sm2 md1>
                  <v-img height="40" width="45" :src="require('../assets/react.svg')"></v-img>
                </v-flex>
                <v-flex class="mt-3">
                    <span class="title react">
                      React
                    </span>
                </v-flex>
              </v-layout>
              <v-divider />
              <v-card-text class="mb-3">
                React is by and far the most popular JS Framework out, according to data gathered from StateofJs.com over time
                react has had great growth from developers whom has used and are willing to use it again each year from 2016-2018
                <v-sparkline
                class="mt-5"
                  height="80"
                  show-labels
                  type="bar"
                  padding="16"
                  :labels="labels"
                  :value="reactValue"
                  color="#61dafb"
                  line-width="25"
                >
                </v-sparkline>
              </v-card-text>
            </v-card>
            <v-btn
              color="primary"
              @click="el = 2"
            >
              Continue
            </v-btn>
          </v-stepper-content>
          
          <v-stepper-content step="2">
            <v-card flat>
              <v-layout row>
                <v-flex xs12 sm3 class="angular">
                  <v-img height="45" width="175" :src="require('../assets/angular.svg')"></v-img>
                </v-flex>
              </v-layout>
              <v-divider />
              <v-card-text>
                Angular still owns a large portion of the market share, however, this is mostly due to legacy code. This framework is steadily on the decline
                seeing less and less use in new projects. If you learn Angular; you will find jobs but most will be maintaining old code and little will be used on new projects
                According to StateofJS Angular has seen a huge drop in developers that have heard of Angular and wanted to learn it each year from 2016-2018.
                <v-sparkline
                  height="80"
                  show-labels
                  type="bar"
                  padding="16"
                  :labels="labels"
                  :value="angularValue"
                  color="#e53935"
                  line-width="25"
                >
                </v-sparkline>
              </v-card-text>
            </v-card>
            <v-btn
              color="primary"
              @click="el = 3"
            >
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card flat>
              <v-layout row>
                <v-flex xs2 sm2 md1>
                  <v-img height="40" width="40" :src="require('../assets/vue.png')"></v-img>
                </v-flex>
                <v-flex class="mt-3">
                    <span class="title">
                      Vue.js
                    </span>
                </v-flex>
              </v-layout>
              <v-divider />
              <v-card-text>
                Vue is the up and coming contender, being the newest of the three frameworks, looking to challenge React as the most popular framework out there. Though it has a long way to go to be a real 
                competitor. Today we are seeing more and more jobs that are looking for Vue.js developers. Though your best bet at this time is to learn React, then dabble in Vue.
                StateofJS.com shows steady climb in developers that used and want to use Vue.js again. seeing a steady 10% + increase each year from 2016-2018
                <v-sparkline
                  height="80"
                  show-labels
                  type="bar"
                  padding="16"
                  :labels="labels"
                  :value="vueValue"
                  color="#4caf50"
                  line-width="25"
                ></v-sparkline>
              </v-card-text>
            </v-card>
            <v-btn
              color="primary"
              @click="el = 1"
            >
              Continue
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'StepperChart',
  data () {
    return {
      el: 0,

      labels: [
        2016,
        2017,
        2018
      ],
      reactValue: [
        48.7,
        57.7,
        64.8
      ],
      vueValue: [
        8.7,
        19.6,
        28.8
      ],
      angularValue: [
        39.7,
        25.6,
        10.4
      ],
    }
  }
}
</script>


<style scoped>
  .react {
    color: #61dafb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .angular {
    background-color: #333333;
    border-radius: 5px
  }
</style>
