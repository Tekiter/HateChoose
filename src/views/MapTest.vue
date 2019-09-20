<template>
  <div>
    <h-nav></h-nav>
    <div id="map" style="width:500px;height:400px;"></div>
  </div>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";
import NavBar from "../components/NavBar.vue";

export default Vue.extend({
  components: {
    "h-nav": NavBar
  },
  mounted() {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
  }
});
</script>
<style scoped>
</style>