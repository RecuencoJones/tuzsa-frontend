import Vue from 'vue'
import VueRouter from 'vue-router'
import Stops from '../modules/stops/containers/Stops.vue'
import Main from '../modules/main/containers/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    }, {
      path: '/stops',
      component: Stops
    }
  ]
})
