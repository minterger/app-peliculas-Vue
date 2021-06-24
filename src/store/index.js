import { createStore } from 'vuex'
import navbar from './modules/navbar'
import todo from './modules/todo'

export default createStore({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    navbar,
    todo
  }
})
