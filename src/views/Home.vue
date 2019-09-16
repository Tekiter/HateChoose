<template>
  <div>
    <h-nav></h-nav>
    <b-jumbotron class="text-center">
      <template v-slot:header>고르기 싫어</template>
      <h2 class="mt-5">지역을 선택하세요.</h2>
      <div>
        <region-select class="regionselect" :regions="regions" v-model="selected"></region-select>
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
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'

import NavBar from '../components/NavBar.vue';
import RegionSelect from '../components/RegionSelect.vue';
import { Region, RegionData, getRegions } from "../lib/api";
import RegionDataStore from '../store/RegionDataStore';

/**
 * Typescript 호환 가능하게 정의된 vuex의 RegionDataStore 를 불러옴
 */
const regionState = getModule(RegionDataStore);


@Component({
    components: {
      'h-nav': NavBar,
      RegionSelect
    }
})
export default class Home extends Vue {

    selected: Region | null = null;

    get regions() {
      return regionState.regions;
    }

    created() {
      regionState.updateRegions();
    }
}

</script>
