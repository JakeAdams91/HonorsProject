import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: 'Home'
  },
  getters: {
    getPath (state) {
      return state.path
    }
  },
  mutations: {
    setPath (state, newPath) {
      state.path = newPath
    }
  },
  actions: {

  }
})
