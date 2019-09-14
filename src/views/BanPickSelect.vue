<template>
  <div>
    <h-nav></h-nav>
    
    <b-container fluid>
      <ban-pick>

      </ban-pick>
    </b-container>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HelloWorld from '../components/HelloWorld.vue';
import NavBar from '../components/NavBar.vue';
import BanPick from '../components/BanPick.vue';

export default Vue.extend({
  components: {
    'h-nav': NavBar,
    BanPick
  }
});
</script>
