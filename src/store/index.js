import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import createLogger from 'vuex/dist/logger'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
const debug = true
/* eslint-disable */
export default new Vuex.Store({
  modules: {
    home,
    user
  },
  getters,
  plugins: debug ? [createLogger()] : []   // 是否开启vuex的debug模式
})
