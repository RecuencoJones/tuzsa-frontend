import Vue from 'vue'
import Vuex from 'vuex'
import stops from '../modules/stops/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stops
  }
})
