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
    cleanPosters (state) {
      state.posters = {}
    },
    updateInfo(state, data) {
      state.info = data
    },
    cleanInfo(state) {
      state.info = {}
    },
    updateReproductores(state, data) {
      state.reproductores = data
    },
    cleanReproductores(state) {
      state.reproductores = []
    },
    updateTemporadas(state, data) {
      state.temporadas = data
    },
    cleanTemporadas(state) {
      state.temporadas = {}
    }
  },
  actions: {
    async getPosters({commit}, {type, query}) {
      commit('cleanPosters')
      const page = query || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?page=${page}`)
      commit('updatePosters', res.data)
    },
    async getPagePosters({commit}, {type,query}) {
      const page = query || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?page=${page}`)
      commit('updatePosters', res.data)
    },
    async searchPoster({commit}, {type, searchQ, pageQ}) {
      commit('cleanPosters')
      const search = searchQ || ''
      const page = pageQ || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?s=${search}&page=${page}`)
      commit('updatePosters', res.data)
    },
    async searchPagePoster({commit}, {type, searchQ, pageQ}) {
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
      commit('cleanReproductores')
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}/${info}`)
      commit('updateReproductores', res.data)
    },
    async updateReproductores({commit}, {info}) {
      commit('cleanReproductores')
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${info}`)
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