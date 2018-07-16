import Vue from 'vue'
import Vuex from 'vuex'
// 代码拆分state,actions,mutations
import state from './state.js'
import actions from './actions.js'
import mutations from './mutatons.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations
})
