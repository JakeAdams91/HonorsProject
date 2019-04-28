<template>
  <v-sheet class="mt-3 bgc centerize" max-width="80%" min-height="60%">
    <p class="pt-3 center display-1">Vue.js File Structure</p>
    <v-divider width="80%" class="centerize"></v-divider>
    <p class="ml-3 pt-3 title">What does a Vue.js file look like, and what makes it so great for front-end development?
    <br> Vue.js joins the HTML, CSS, and Javascript into one file, utilizing a neat structure that seperates them
    <br>On top of this, vue.js makes manipulating the DOM extremely easy with alot of built in functionality</p>
    <v-card flat class="bgc">
      <v-card-title class="headline">Here's an example of a blank Vue.js file</v-card-title>
      <v-card-text class="headline">
        <code class="coder">
          &lt;template&gt;
            <span class="greener">< !-- this is where you write your HTML5 -- > </span>
          &lt;/template&gt;

          &lt;script&gt;
            <span class="greener">// the script tag holds all your Javascript code related to the file.</span><br>
          <span class="ml-5 pl-5 purpler">export default</span> {
            <span class="bluer">name: <span class="brownr">'YourFile'</span></span> 
            }
          &lt;/script&gt;
          
          &lt;style&gt;
            <span class="greener">// your CSS styles go in the style tags</span>
          &lt;/style&gt;
        </code>
      </v-card-text>
    </v-card>
    <p class="ml-3 pb-3 pt-3 title">As you can see, you have all three things you need to write a full static web-page, the HTML, Javascript, and CSS. </p>
  </v-sheet>
</template>

<script>
export default {
  name: 'FileStructure'
}
</script>

<style>

</style>
