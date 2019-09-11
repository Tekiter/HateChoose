<template>
  <div>
    <h-nav></h-nav>

    <b-container>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> 
    </b-container>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HelloWorld from '../components/HelloWorld.vue';
import NavBar from '../components/NavBar.vue';

export default Vue.extend({
  components: {
    HelloWorld: HelloWorld,
    'h-nav': NavBar
  }
});
</script>
