<template>
  <div>
    <h-nav></h-nav>
    <b-jumbotron class="text-center">
      <template v-slot:header>고르기 싫어</template>
      <h2 class="mt-5">지역을 선택하세요.</h2>
      <div>
        <region-select class="regionselect" :regions="regions"></region-select>
      </div>
      

      <b-button :to="'fullrandom'" variant="primary" pill class="mt-5">Full Random</b-button>
      <b-button :to="'banpick'" variant="secondary" pill class="ml-3 mt-5">BanPick</b-button>
      

    </b-jumbotron>
    <b-container>
      
    </b-container>
    
  </div>
</template>
<style scoped>
  .regionselect {
    width: 20em;
    float: none;
    margin: 0 auto;
  }
</style>

<script lang="ts">
import Vue from "vue";

import NavBar from '../components/NavBar.vue';
import RegionSelect from '../components/RegionSelect.vue';
import { getRegions } from '../lib/api';

export default Vue.extend({
  components: {
    'h-nav': NavBar,
    RegionSelect
  },
  computed: {
    regions() {
      return getRegions();
    }
  }
});
</script>
