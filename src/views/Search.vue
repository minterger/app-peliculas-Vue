<template>
  <div class="container-md">
    <h1 class="text-center mt-3 mb-5">Buscador</h1>
    <Posters />
    <PaginationSearch />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
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
  created() {
    this.searchPoster({type: '/search' , searchQ: this.$route.query.s, pageQ: this.$route.query.page});
    document.title = `${process.env.VUE_APP_APP_TITLE} - Buscardor de Peliculas, Series y Animes`
  }
}
</script>
