import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import store from '../store';

import { Region, getRegions } from '../lib/api'

@Module({ 
  dynamic: true,
  name:"regionState",
  store
})
export default class RegionDataStore extends VuexModule {
  regions: Region[] = [];

  @Mutation
  setRegions(regions: Region[]) {
    this.regions = regions;
  }

  @Action
  updateRegions() {
    const regions = getRegions();
    this.context.commit('setRegions', regions);
  }
}