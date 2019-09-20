<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="식당 이름">
        <b-form-input v-model="form.name"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox v-model="form.alc" name="check-button" switch>
          술 가능 여부
        </b-form-checkbox>
      </b-form-group>
      <b-form-group>
        <b-form-input type="range" v-model="form.price" min="1000" max="30000" step="1000">
        </b-form-input>
        {{ form.price }}원 대
      </b-form-group>
    </b-form>
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, Emit } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import { Region, RegionData } from "../lib/api";

interface FormData {
  name: string;
  alc: boolean;
  category: string[];
  price: number;
  foods: string[];
  loc?: number[];
}

@Component({
  components: {}
})
export default class PlaceEditor extends Vue {
  @Prop() value!: RegionData;

  form: FormData = {
    name: "",
    alc: false,
    category: [],
    price: 0,
    foods: []
  };

  @Emit()
  input() {
    return null;
  }

  onSubmit() {}
}
</script>