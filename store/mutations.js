import Vue from 'vue'

export default {

  SET_ITEM: (state, payload) => {
    Vue.set(state, payload.name, payload.data)
  },

}