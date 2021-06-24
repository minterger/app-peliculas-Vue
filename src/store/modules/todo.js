import axios from "axios"

export default {
  namespaced: true,
  state: {
    posters: {},
    info: {},
    reproductores: [],
    temporadas: {}
  },
  mutations: {
    updatePosters(state, data) {
      state.posters = data
    },
    updateInfo(state, data) {
      state.info = data
    },
    updateReproductores(state, data) {
      state.reproductores = data
    },
    updateTemporadas(state, data) {
      state.temporadas = data
    }
  },
  actions: {
    async getPosters({commit}, {type, query}) {
      const page = query || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?page=${page}`)
      commit('updatePosters', res.data)
    },
    async searchPoster({commit}, {type, searchQ, pageQ}) {
      const search = searchQ || ''
      const page = pageQ || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?s=${search}&page=${page}`)
      commit('updatePosters', res.data)
    },
    async infoPoster({commit}, {type, info}) {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}/${info}`)
      commit('updateInfo', res.data)
    },
    async getReproductores({commit}, {type, info}) {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}/${info}`)
      commit('updateReproductores', res.data)
    },
    async getTemporadas({commit}, {type, info}) {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}/temporadas/${info}`)
      commit('updateTemporadas', res.data)
    }
  },
  getters: {
    posters: state => state.posters,
    info: state => state.info,
    reproductores: state => state.reproductores,
    temporadas: state => state.temporadas
  }
}