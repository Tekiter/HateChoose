import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BanPickSelect from './views/BanPickSelect.vue'
import FullRandomSelect from './views/FullRandomSelect.vue'
import NotFound from './views/NotFound.vue'

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
      component: BanPickSelect
    },
    {
      path: '/fullrandom',
      name: 'fullrandom',
      component: FullRandomSelect
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/roullet',
      name:'roullet',
      component:()=>import('./components/Roullet.vue')
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})
