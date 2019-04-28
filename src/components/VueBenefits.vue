<template>
  <v-sheet class="mt-3 bgc centerize" max-width="80%" min-height="60%">
    <p class="ml-3 pt-3 title">One of the most exciting parts of Vue.js for me is the ease of dynamically rendering data.<br> with the built in <code>v-for</code> directive.</p>
    
    <v-card flat class="bgc">
      <v-card-title class="title">Example of hard-coded content from our Band project</v-card-title>
      <v-card-text class="title">
        <code class="coder">
          &lt;body&gt;
          <span class="greener">< !-- the downside to this is a bloated code base.
            adding or changing blocks can be a burden especially
            if there is alot of data represented -- > </span>
            &lt;div&gt;
              &lt;img src="<span class="blackr">../path/to/img.jpg</span>" /&gt;
                &lt;div class="grid-stuff"&gt;
                  <span class="blackr">Jim</span>
                  &lt;p&gt;
                   <span class="blackr">Lorem ipsum dolor sit amet, consectetur</span>
                  &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
              &lt;img src="<span class="blackr">../path/to/imgII.jpg</span>" /&gt;
                &lt;div class="grid-stuff"&gt;
                  <span class="blackr">Paul</span>
                  &lt;p&gt;
                    <span class="blackr">Lorem ipsum dolor sit amet, consectetur</span>
                  &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
              &lt;img src="<span class="blackr">../path/to/imgIII.jpg</span>" /&gt;
                &lt;div class="grid-stuff"&gt;
                  <span class="blackr">Sab</span>
                  &lt;p&gt;
                    <span class="blackr">Lorem ipsum dolor sit amet, consectetur</span>
                  &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
          &lt;/body&gt; 
        </code>
      </v-card-text>
    </v-card>
    <v-card flat class="bgc">
      <v-card-title class="title">Example Vue.js Dynamic Rendering</v-card-title>
      <v-card-text class="title">
        <code class="coder">
          &lt;template&gt;
          <span class="greener">< !-- the power of Vue Compels You! -- > </span>
            &lt;div v-for="(member, index) in bandMembers" :key="index"&gt;
              &lt;v-img :src="<span class="blackr">member.img</span>" /&gt;
                &lt;div class="grid-stuff"&gt;
                  <span class="blackr">{ member.name }</span>
                  &lt;p&gt;
                   <span class="blackr"> { member.bio } </span>
                  &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
          &lt;/template&gt; 
        </code>
      </v-card-text>
    </v-card>
    <p class="ml-3 pt-3 headline"> Lets see it in action!</p>
  </v-sheet>
</template>

<script>
export default {
  name: 'VueBenefits',
  data () {
    return {
      listItems: [
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  }
}
</script>

<style>

</style>