import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  fileName: ''
  },
  mutations: {
  setFileName (state, fileName) {
    state.fileName = fileName
  }
  },
  actions: {
    setFileName ({ commit }, fileName) {
      return commit('setFileName', fileName)
    }
  },
  getters: {
    fileName: state => state.fileName
  }
})
