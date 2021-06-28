<template>
  <div class="container-md">
    <h1 class="text-center mt-3 mb-5">Buscador</h1>
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

export default {
  components: {
    Posters,
    PaginationSearch
  },
  methods: {
    ...mapActions({'searchPoster': 'todo/searchPoster'})
  },
  computed: {
    ...mapGetters({'posters': 'todo/posters'}),
    noResults() {
      if (this.posters.posters) {
        return this.posters.posters.length !== 0 ? true : false
      }
      return true
    }
  },
  created() {
    this.searchPoster({type: '/search' , searchQ: this.$route.query.s, pageQ: this.$route.query.page});
    document.title = `${process.env.VUE_APP_APP_TITLE} - Buscardor de Peliculas, Series y Animes`
  }
}
</script>
