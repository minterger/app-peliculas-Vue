import axios from "axios"

export default {
  namespaced: true,
  state: {
    posters: [],
    pagination: {},
    info: {},
    reproductores: [],
    temporadas: {}
  },
  mutations: {
    updatePosters(state, data) {
      state.posters = data.posters
      state.pagination = data.pagination
    },
    cleanPostersPagination (state) {
      state.posters = []
      state.pagination = {}
    },
    emptyPosters (state) {
      state.posters = state.posters.map((e, i) => {
        return {
          i,
          poster_link: "#",
          poster: {
            alt: "Cargando",
            src: "/img/loading.gif"
          },
          title: "Cargando",
          raiting: "10/10"
        }
      })
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
      commit('cleanPostersPagination')
      const page = query || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?page=${page}`)
      commit('updatePosters', res.data)
    },
    async getPagePosters({commit}, {type,query}) {
      commit('emptyPosters')
      const page = query || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?page=${page}`)
      commit('updatePosters', res.data)
    },
    async searchPoster({commit}, {type, searchQ, pageQ}) {
      commit('cleanPostersPagination')
      const search = searchQ || ''
      const page = pageQ || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?s=${search}&page=${page}`)
      commit('updatePosters', res.data)
    },
    async searchPagePoster({commit}, {type, searchQ, pageQ}) {
      commit('emptyPosters')
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
    pagination: state => state.pagination,
    info: state => state.info,
    reproductores: state => state.reproductores,
    temporadas: state => state.temporadas
  }
}