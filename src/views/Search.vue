<template>
  <div class="container-md">
    <h1 class="text-center mt-3 mb-5">Buscador</h1>
    <Loading/>
    <Posters v-if="noResults" />
    <div v-else class="text-center my-4">
      <h4>No se encontraron resultados</h4>
    </div>
    <PaginationSearch />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Posters from '@/components/Posters.vue'
import PaginationSearch from '@/components/PaginationSearch.vue'
import Loading from '@/components/Loading.vue'


export default {
  components: {
    Posters,
    PaginationSearch,
    Loading
  },
  methods: {
    ...mapActions({
      'searchPoster': 'todo/searchPoster',
      'searchPagePoster': 'todo/searchPagePoster'
      })
  },
  computed: {
    ...mapGetters({
      'posters': 'todo/posters',
      'statusSearch': 'todo/statusSearch'
    }),
    noResults() {
      if (this.statusSearch) {
        return this.posters.length !== 0 ? true : false
      }
      return true
    }
  },
  watch : {
    '$route.query.s'() {
      if (this.$route.name == 'Search') {
        this.searchPoster({type: '/search' , searchQ: this.$route.query.s, pageQ: this.$route.query.page});
      }
    },
    '$route.query.page'() {
      if (this.$route.name == 'Search') {
        this.searchPagePoster({
          type: this.$route.path,
          searchQ: this.$route.query.s,
          pageQ: this.$route.query.page,
        })
      }
    }
  },
  mounted() {
    this.searchPoster({type: '/search' , searchQ: this.$route.query.s, pageQ: this.$route.query.page});
    document.title = `${process.env.VUE_APP_APP_TITLE} - Buscardor de Peliculas, Series y Animes`
  }
}
</script>
