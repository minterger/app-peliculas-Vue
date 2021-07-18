import axios from "axios"

export default {
  namespaced: true,
  state: {
    posters: [],
    pagination: {},
    info: {},
    reproductores: [],
    temporadas: {},
    statusSearch: false
  },
  mutations: {
    updatePosters(state, data) {
      state.posters = data ? data.posters : []
      state.pagination = data ? data.pagination : {}
    },
    emptyPosters (state) {
      state.posters = state.posters.map((e, i) => {
        return {
          i,
          poster_link: "#",
          poster: {
            alt: "Cargando",
            src: "/img/loading--img.gif"
          },
          title: "Cargando",
          raiting: "10/10"
        }
      })
    },
    updateInfo(state, data) {
      state.info = data || {}
    },
    updateReproductores(state, data) {
      state.reproductores = data || []
    },
    updateTemporadas(state, data) {
      state.temporadas = data || {}
    },
    updateStatusSearch(state , status) {
      state.statusSearch = status || false
    }
  },
  actions: {
    async getPosters({commit}, {type, query}) {
      commit('updatePosters')
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
      commit('updateStatusSearch')
      commit('updatePosters')
      const search = searchQ || ''
      const page = pageQ || 1
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}?s=${search}&page=${page}`)
      commit('updatePosters', res.data)
      commit('updateStatusSearch', true)
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
      commit('updateReproductores')
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}/${info}`)
      commit('updateReproductores', res.data)
    },
    async updateReproductores({commit}, {info}) {
      commit('updateReproductores')
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
    infoTitle: state => state.info.title,
    ifInfo: state => {
      return !state.info.title ? false : true
    },
    reproductores: state => state.reproductores,
    temporadas: state => state.temporadas,
    statusSearch: state => state.statusSearch
  }
}