<template>
  <div>
    <h-nav></h-nav>
    <b-container>
      <b-row>
        <b-col>
            
        </b-col>
        <b-col>
          <place-editor></place-editor>
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

import NavBar from "../components/NavBar.vue";
import PlaceEditor from "../components/PlaceEditor.vue";

@Component({
  components: {
    "h-nav": NavBar,
    PlaceEditor
  }
})
export default class RegionEditor extends Vue {}
</script>