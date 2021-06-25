<template>
  <div class="container-md">
    <h1 class="text-center mt-3 mb-2">Inicio</h1>
    <div class="container text-center my-3 mb-3">
      <router-link @click="goTo()"
        to="/"
        class="btn btn-primary my-1 mx-1">Ultimo Año</router-link>
      <router-link @click="goToLast()"
        to="/last"
        class="btn btn-primary my-1 mx-1">Subido Recientemente</router-link>
    </div>
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
    ...mapActions({
      'searchPoster': 'todo/searchPoster',
      'getPosters': 'todo/getPosters'
    }),
    goTo() {
      this.getPosters({type: '/estrenos'});
    },
    goToLast() {
      this.searchPoster({type: '/search'});
    }
  },
  created() {
    if (this.$route.name == 'Home') {
      this.getPosters({type: '/estrenos'})
    } else {
      this.searchPoster({type: '/search'});
    }
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Peliculas, Series y Animes Online en Full HD`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', 'PelisLatino - Peliculas, Series y Animes En español latino online en HD actualizadas con los mejores servidores, entra y encuentra lo que buscas')
  }
}
</script>
