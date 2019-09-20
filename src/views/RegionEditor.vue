<template>
  <div>
    <h-nav></h-nav>
    <b-container v-if="currentRegion">
      
      <b-row>
        <b-col>
          <b-list-group>
            <b-list-group-item v-for="item of places" :key="item.name">
              {{ item.name }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <place-editor></place-editor>
        </b-col>
      </b-row>
    </b-container>
    
    <b-container v-else>
      <b-row>
        <b-col>
          <h3>Not Selected.</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import { Region } from "../lib/api";

import NavBar from "../components/NavBar.vue";
import PlaceEditor from "../components/PlaceEditor.vue";

import RegionDataStore from "../store/RegionDataStore";
import SessionStore from "../store/SessionStore";

const regionState = getModule(RegionDataStore);
const sessionState = getModule(SessionStore);


@Component({
  components: {
    "h-nav": NavBar,
    PlaceEditor
  }
})
export default class RegionEditor extends Vue {

  currentRegion!: Region | null;

  get places() {
    if (this.currentRegion) {
      return this.currentRegion.Data.Places;
    }
    return null;
  }

  

  created() {
    regionState.updateRegions();

    this.currentRegion = regionState.regions[0];
  }
}
</script>