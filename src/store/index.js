import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state: {
    tester: 'We got state from vuex! Yay!'
  },
  modules: {
    ui
  }
})

export default vuex
