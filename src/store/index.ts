import { createStore } from 'vuex'

export default createStore({
  state: {
    data: []
  },
  getters: {
  },
  mutations: {
    async SET_PROJECTS(state, payload) {
      state.data = payload
    } 
  },
  actions: {
  },
  modules: {
  }
})
