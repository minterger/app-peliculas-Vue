<template>
  <div class="container-md">
    <h1 class="text-center mt-3 mb-2">Inicio</h1>
    <div class="container text-center my-3 mb-3">
      <button @click.prevent="goTo()" class="btn btn-primary my-1 mx-1">Ultimo Año</button>
      <button @click.prevent="goToLast()" class="btn btn-primary my-1 mx-1">Subido Recientemente</button>
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
      this.$router.push('/');
      this.getPosters({type: '/estrenos'});
    },
    goToLast() {
      this.$router.push('/last');
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
  }
}
</script>
