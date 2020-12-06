export default {

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