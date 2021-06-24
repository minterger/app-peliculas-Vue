<template>
  <div class="container-md">
    <h1 class="text-center mt-3 mb-5">Inicio</h1>
    <Posters />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Posters from '@/components/Posters.vue'

export default {
  components: {
    Posters
  },
  methods: {
    ...mapActions({'searchPoster': 'todo/searchPoster'})
  },
  created() {
    this.searchPoster({type: '/search'})
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Peliculas, Series y Animes Online en Full HD`
  }
}
</script>
