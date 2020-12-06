import Vue from 'vue'

export default {

  SET_ITEM: (state, payload) => {
    Vue.set(state, payload.name, payload.data)
  },

  TOGGLE_NAV(state) {
    state.showNav = !state.showNav
  }

}