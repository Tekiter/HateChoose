import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import store from '../store';

import { Region, getRegions } from '../lib/api'

@Module({ 
    dynamic: true,
    name:"sessionState",
    store
  })
  export default class SessionStore extends VuexModule {
    region: Region | null = null
  
    @Mutation
    setRegion(region: Region) {
      this.region = region
    }
  
    get hasSession() {
      return (
        this.region != null
      )
    }
  }