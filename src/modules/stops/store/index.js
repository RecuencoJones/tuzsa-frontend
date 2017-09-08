import { getStops, getStop } from '../../../services/stops'
import { RECEIVE_STOPS, RECEIVE_STOP, CLEAR_STOP, SET_FILTER } from './mutation-types'

const state = {
  stop: null,
  stops: null,
  filterText: null
}

const getters = {
  getStops(state) {
    return state.stops
  },

  getFilteredStops(state) {
    return state.stops && state.stops.filter((stop) =>
      !state.filterText ||
      stop.title.toLowerCase().indexOf(state.filterText.toLowerCase()) >= 0)
  },

  getStop(state) {
    return state.stop
  }
}

const actions = {
  getStops({commit}) {
    getStops().then((stops) => {
      commit(RECEIVE_STOPS, {stops})
    })
  },

  getStop({commit}, id) {
    commit(RECEIVE_STOP, {stop: null})

    getStop(id).then((stop) => {
      commit(RECEIVE_STOP, {stop})
    })
  },

  clearStop({commit}) {
    commit(CLEAR_STOP)
  },

  filterStops({commit}, filterText) {
    commit(SET_FILTER, {filterText})
  }
}

const mutations = {
  [RECEIVE_STOPS](state, {stops}) {
    state.stops = stops
  },

  [RECEIVE_STOP](state, {stop}) {
    state.stop = stop
  },

  [CLEAR_STOP](state) {
    state.stop = null
  },

  [SET_FILTER](state, {filterText}) {
    state.filterText = filterText
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
