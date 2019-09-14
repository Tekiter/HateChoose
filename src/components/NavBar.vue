<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand :to="'/'">{{ titleName }}고르기싫어</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ['region'],
  data() {
    return {
      regionName: "가대생은"
    }
  },
  computed: {
    titleName(): string {
      if (!this.region) {
        return "";
      }
      return this.region + " ";
    }
  }
});
</script>