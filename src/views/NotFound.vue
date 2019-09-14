<template>
  <div>
    <h-nav></h-nav>
    
    <b-jumbotron header="404 Not Found">
        
    </b-jumbotron>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HelloWorld from '../components/HelloWorld.vue';
import NavBar from '../components/NavBar.vue';

export default Vue.extend({
  components: {
    'h-nav': NavBar
  }
});
</script>
