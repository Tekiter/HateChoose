<template>
  <div>
    <h-nav></h-nav>
    <b-jumbotron class="text-center">
      <template v-slot:header>고르기 싫어</template>
      <!-- <h2 class="mt-5">지역을 선택하세요.</h2> -->
      <b-button :to="'fullrandom'" variant="primary" pill class="mt-5">Full Random</b-button>
      <b-button :to="'banpick'" variant="secondary" pill class="ml-3 mt-5">BanPick</b-button>
      

    </b-jumbotron>
    <b-container>
      
    </b-container>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import NavBar from '../components/NavBar.vue';

export default Vue.extend({
  components: {
    'h-nav': NavBar
  }
});
</script>
