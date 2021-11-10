export const state = () => ({
  member: {},
  portfolios: [],
  articles: []
})

export const getters = {
  member: (state) => state.member,
  portfolios(state) {
    return state.portfolios
  },

  articles(state) {
    return state.articles
  }
}

export const mutations = {
  memberProfile: (state, data) => (state.member = data),
  setPortfolios(state, data) {
    state.portfolios = data
  },

  setArticles(state, data) {
    state.articles = data
  }
}

export const actions = {
  userMemberProfile({commit}, data) {
    commit('memberProfile', data)
  },
  fetchPortfolios(vuexContext, portfolios) {
    vuexContext.commit('setPortfolios', portfolios)
  },

  fecthArticles(vuexContext, articles) {
    vuexContext.commit('setArticles', articles)
  }
}


