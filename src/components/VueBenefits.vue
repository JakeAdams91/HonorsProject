<template>
  <v-sheet class="mt-3 mb-5 bgc centerize" max-width="80%" min-height="60%">
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
    <!-- Toggle Dynamic Rendering -->
    <v-btn @click="clicky = !clicky" class="ml-5 mb-3" color="primary">Render!</v-btn>

    <!-- BEGIN Dynamic Rendering -->
    <transition-group name="animate">
    <v-card class="animate" v-show="clicky" v-for="(item, index) in listItems" :key="index">
      <v-card-title :key="item.title">{{ item.title }}</v-card-title>
      <v-icon :key="item.icon" class="ml-5" color="primary">{{ item.icon }}</v-icon>
      <v-card-text :key="item.info">{{ item.info }}</v-card-text>
    </v-card>
    </transition-group>
    <!-- END Dynamic Rendering  -->

  </v-sheet>
</template>

<script>
export default {
  name: 'VueBenefits',
  data () {
    return {
      clicky: false,
      listItems: [
        { icon: 'android', title: 'Android Phone', info: 'Lorem ipsum dolor sit amet, consectetur' },
        { icon: 'accessibility', title: 'Person', info: 'Lorem ipsum dolor sit amet, consectetur' },
        { icon: 'account_box', title: 'Account Management', info: 'Lorem ipsum dolor sit amet, consectetur' },
        // { icon: 'build', title: 'Fix it', info: 'Lorem ipsum dolor sit amet, consectetur' },
        // { icon: 'attach_money', title: 'Money', info: 'Lorem ipsum dolor sit amet, consectetur' },
        // { icon: 'euro_symbol', title: 'Funny Money', info: 'Lorem ipsum dolor sit amet, consectetur' },
        // { icon: 'code', title: 'Code it out', info: 'Lorem ipsum dolor sit amet, consectetur' },
        // { icon: 'compare_arrows', title: 'Comparison', info: 'Lorem ipsum dolor sit amet, consectetur' },
        // { icon: 'eject', title: 'Eject Disk', info: 'Lorem ipsum dolor sit amet, consectetur' }
      ]
    }
  }
}
</script>

<style>
.animate {
  transition: all 0.5s;

}
.animate-enter, .animate-leave-to
/* .animate-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.animate-enter-to {
  opacity: 1;
  transform: scale(1);
}

.animate-leave-active {
  opacity: 1;
  transform: scale(.5);
}

.animate-move {
  opacity: 1;
  transition: all 0.5s;
}
</style>