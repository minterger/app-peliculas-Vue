import router from '@/router/index'
import axios from 'axios'
import todo from './todo';

export default {
  namespaced:true,
  state: {
    generos: [],
    years: []
  },
  mutations: {
    updateGeneros(state, data) {
      state.generos = data
    },
    updateYears(state, data) {
      state.years = data
    }
  },
  actions: {
    async getGeneros({commit}) {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}/generos`);
      commit('updateGeneros', res.data);
    },
    async getYears({commit}) {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}/years`);
      commit('updateYears', res.data);
    },
    searching(context, search) {
      router.push('/search?s='+ search);
    }
  },
  getters: {
    generos: state => state.generos,
    years: state => state.years
  }
}