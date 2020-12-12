export default {

  async nuxtServerInit({ commit }) {
    const socials = await this.$content('socials')
      .sortBy('order', 'asc')
      .fetch()
    
    commit('SET_ITEM', {
      name: 'socials',
      data: socials
    })
  },

  toggleNav({ commit }) {
    commit('TOGGLE_NAV')
  },

  updatePage({ commit }, data) {
    commit(`SET_ITEM`, {
      name: `page`,
      data: data
    })
  },

  updatePortfolio({ commit }, data) {
    commit('SET_ITEM', {
      name: 'portfolio',
      data: data
    })
  }

}