import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// import system from './modules/system'
import getters from './getters'
// 用于store状态持久化
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
    // system
  },
  plugins: [createPersistedState()],
  getters
})

export default store
