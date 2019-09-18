<template>
    <div>
        <h-nav :prefix="region.TitleName"></h-nav>
        <b-container>
            
        </b-container>

        </div>
</template>
<style scoped>

</style>
<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import NavBar from '../components/NavBar.vue';

import RegionDataStore from "../store/RegionDataStore";
import SessionStore from "../store/SessionStore";

const regionState = getModule(RegionDataStore);
const sessionState = getModule(SessionStore);


@Component({
  components: {
    "h-nav": NavBar
  }
})
export default class Home extends Vue {

    get region() {
        return sessionState.region;
    }
}

</script>