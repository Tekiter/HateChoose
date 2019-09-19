import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BanPickSelect from './views/BanPickSelect.vue'
import FullRandomSelect from './views/FullRandomSelect.vue'
import NotFound from './views/NotFound.vue'


import { getModule } from "vuex-module-decorators";
import SessionStore from "./store/SessionStore";

const sessionState = getModule(SessionStore);


Vue.use(Router)

// typescript 식 routing
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/banpick',
      name: 'banpick',
      component: BanPickSelect,
      beforeEnter(to, from, next) {
        if (sessionState.hasSession) {
          next();
        }
        else {
          next({ name: 'home' });
        }
      }
    },
    {
      path: '/fullrandom',
      name: 'fullrandom',
      component: FullRandomSelect,
      beforeEnter(to, from, next) {
        if (sessionState.hasSession) {
          next();
        }
        else {
          next({ name: 'home' });
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')      
    },
    {
      path: '/roullet',
      name: 'roullet',
      component: () => import('./components/Roullet.vue')
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})
