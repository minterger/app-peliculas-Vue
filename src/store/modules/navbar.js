import router from '@/router/index'
import axios from 'axios'
import todo from './todo';

export default {
  namespaced:true,
  state: {
    generos: []
  },
  mutations: {
    updateGeneros(state, data) {
      state.generos = data
    }
  },
  actions: {
    async getGeneros({commit}) {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}/generos`);
      commit('updateGeneros', res.data);
    },
    searching(context, search) {
      router.push('/search?s='+ search);
    }
  },
  getters: {
    generos: state => state.generos
  }
}