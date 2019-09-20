<template>
  <div>
    <h-nav></h-nav>
    <div id="map" style="width:500px;height:400px;"></div>
    <input type="text" v-model="reg"/>
    <button @click="getPos(reg)">좌표 표시</button>
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
  data(){
      return {
          reg:'',
          geo:Object
      }
  },
  mounted() {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    var geocoder = new kakao.maps.services.Geocoder(); 
    // 주소 - 좌표 간의 변환을 도와주는 서비스 객체
    this.geo=geocoder;
  },
  methods:{
    getPos(region) {
        var callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            alert("x: "+result[0].x+", y: "+result[0].y);
            console.log(result);
        }
        };
        this.geo.addressSearch(region,callback); // 마지막 options인자는 검색할 페이지가 들어감
    }
  }
});
</script>
<style scoped>
</style>