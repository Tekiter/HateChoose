<template>
  <div>
    <h-nav></h-nav>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">VueRoulette</h1>
          <h2 class="subtitle">A simple roulette using VueJS</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" id="app">
        <div class="columns">
          <div class="column">
            <div class="columns is-centered">
              <input
                type="button"
                class="button is-dark"
                value="SPIN ROULETTE"
                id="spin"
                v-on:click="spin"
              />
            </div>
            <div class="columns is-centered">
              <canvas id="canvas" width="500" height="500"></canvas>
            </div>
          </div>
          <div class="column">
            <div class="columns is-multiline">
              <div class="column is-half">
                <div class="field">
                  <input
                    class="input"
                    type="text"
                    placeholder="원하는 메뉴를 적으세요!"
                    v-model="new_option"
                    v-on:keyup.enter="addOptions"
                  />
                </div>
              </div>
              <div class="column is-half">
                <button class="button is-primary" v-on:click="addOptions">메뉴 추가</button>
              </div>
              <div class="column is-one-quarter" v-for="option in options" :key="option">
                <button class="button is-danger" v-on:click="removeOptions(option)">x</button>
                <span style="display:inline-block;">{{option}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import NavBar from '../components/NavBar.vue';
export default Vue.extend({
  components:{
    'h-nav': NavBar
  },
  data: function() {
    return {
      options: ["한번 더!"],
      new_option: "",
      startAngle: 0,
      startAngleStart: 0,
      spinTimeout: null,
      spinArcStart: 10,
      spinTime: 0,
      spinTimeTotal: 0,
      ctx: ""
    };
  },
  computed: {
    arc: function() {
      return Math.PI / (this.options.length / 2);
    }
  },
  methods: {
    byte2Hex: function(n) {
      var nybHexString = "0123456789ABCDEF";
      return (
        String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
        nybHexString.substr(n & 0x0f, 1)
      );
    },
    RGB2Color: function(r, g, b) {
      return "#" + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
    },
    getColor: function(item, maxitem) {
      var phase = 0;
      var center = 128;
      var width = 127;
      var frequency = (Math.PI * 2) / maxitem;

      var red = Math.sin(frequency * item + 2 + phase) * width + center;
      var green = Math.sin(frequency * item + 0 + phase) * width + center;
      var blue = Math.sin(frequency * item + 4 + phase) * width + center;

      return this.RGB2Color(red, green, blue);
    },
    addOptions: function() {
      this.options.push(this.new_option);
      this.new_option = "";
      this.drawRouletteWheel();
    },
    removeOptions: function(option) {
      let idx = this.options.indexOf(option) || 0;
      this.options.splice(idx, 1);
      this.drawRouletteWheel();
    },
    drawRouletteWheel: function() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var outsideRadius = 200;
        var textRadius = 160;
        var insideRadius = 125;
        this.ctx = canvas.getContext("2d");
        this.ctx.clearRect(0, 0, 500, 500);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.font = "bold 12px Helvetica, Arial";
        for (var i = 0; i < this.options.length; i++) {
          var angle = this.startAngle + i * this.arc;
          //this.ctx.fillStyle = colors[i];
          this.ctx.fillStyle = this.getColor(i, this.options.length);
          this.ctx.beginPath();
          this.ctx.arc(250, 250, outsideRadius, angle, angle + this.arc, false);
          this.ctx.arc(250, 250, insideRadius, angle + this.arc, angle, true);
          this.ctx.stroke();
          this.ctx.fill();
          this.ctx.save();
          this.ctx.shadowOffsetX = -1;
          this.ctx.shadowOffsetY = -1;
          this.ctx.shadowBlur = 0;
          this.ctx.shadowColor = "rgb(220,220,220)";
          this.ctx.fillStyle = "black";
          this.ctx.translate(
            250 + Math.cos(angle + this.arc / 2) * textRadius,
            250 + Math.sin(angle + this.arc / 2) * textRadius
          );
          this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
          var text = this.options[i];
          this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
          this.ctx.restore();
        }
        //Arrow
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
        this.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
        this.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
        this.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
        this.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
        this.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
        this.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
        this.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
        this.ctx.fill();
      }
    },
    spin: function() {
      /* 룰렛 돌아가는 스피드 */
      /* 요소마다 개별 확률을 주는 건 
      요소별로 룰렛이 그려지는 범위를 다르게 주어도 됨 */
      this.spinAngleStart = Math.random() * 60 + 10;
      this.spinTime = 0;
      /* 룰렛 돌아가는 시간 */
      this.spinTimeTotal = Math.random() * 3 + 10 * 1000;
      this.rotateWheel();
    },
    rotateWheel: function() {
      this.spinTime += 30;
      if (this.spinTime >= this.spinTimeTotal) {
        this.stopRotateWheel();
        return;
      }
      var spinAngle =
        this.spinAngleStart -
        this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
      this.startAngle += (spinAngle * Math.PI) / 180;
      this.drawRouletteWheel();
      let _this = this;
      this.spinTimeout = setTimeout(function() {
        _this.rotateWheel();
      }, 30);
    },
    stopRotateWheel: function() {
      clearTimeout(this.spinTimeout);
      var degrees = (this.startAngle * 180) / Math.PI + 90;
      var arcd = (this.arc * 180) / Math.PI;
      var index = Math.floor((360 - (degrees % 360)) / arcd);
      this.ctx.save();
      this.ctx.font = "bold 30px Helvetica, Arial";
      var text = this.options[index];
      console.log(index, text, this.options);
      this.ctx.fillText(
        text,
        250 - this.ctx.measureText(text).width / 2,
        250 + 10
      );
      this.ctx.restore();
    },
    easeOut: function(t, b, c, d) {
      var ts = (t /= d) * t;
      var tc = ts * t;
      return b + c * (tc + -3 * ts + 3 * t);
    }
  },
  mounted(){
      this.drawRouletteWheel();
  }
});
</script>
<style scoped src="../assets/bulma.css">
#category-list{
  /* display:inline-block; */
  width:80%;
}
</style>