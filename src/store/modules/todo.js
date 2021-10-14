import axios from "axios"

export default {
  namespaced: true,
  state: {
    showCarousel: false,
    loading: false,
    loadingRepTemp: false,
    posters: [],
    pagination: {},
    info: {},
    reproductores: [],
    temporadas: {},
    statusSearch: false,
    posterLastUploaded: []
  },
  mutations: {
    updatePosters(state, data) {
      state.loading = data ? false : true
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
      state.loadingRepTemp = data ? false : true
      state.reproductores = data || []
    },
    updateTemporadas(state, data) {
      state.loadingRepTemp = data ? false : true
      state.temporadas = data || {}
    },
    updateStatusSearch(state, status) {
      state.statusSearch = status || false
    },
    updateLastUploaded(state, data) {
      state.showCarousel = true
      state.posterLastUploaded = data
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
      commit('updateTemporadas')
      const res = await axios.get(`${process.env.VUE_APP_API_URL}${type}/temporadas/${info}`)
      commit('updateTemporadas', res.data)
    },
    async getLastUploaded({commit}) {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}/last`)
      commit('updateLastUploaded', res.data)
    }
  },
  getters: {
    showCarousel: state => state.showCarousel,
    loading: state => state.loading,
    loadingRepTemp: state => state.loadingRepTemp,
    posters: state => state.posters,
    pagination: state => state.pagination,
    info: state => state.info,
    infoTitle: state => state.info.title,
    ifReproductores: state => {
      return state.reproductores.reproductores ? true : false
    },
    reproductores: state => state.reproductores,
    temporadas: state => state.temporadas,
    statusSearch: state => state.statusSearch,
    posterLastUploaded: state => state.posterLastUploaded
  }
}