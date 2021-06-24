<template>
  <div class="container-md">
    <h1 class="text-center my-3">Genero {{$route.params.type}} de {{$route.params.genero}}</h1>
    <div class="container text-center my-3 mb-3">
      <button @click.prevent="goTo(`/generos/${$route.params.genero}`)" class="btn btn-primary my-1 mx-1">Todos</button>
      <button @click.prevent="goTo(`/generos/${$route.params.genero}/peliculas`)" class="btn btn-primary my-1 mx-1">Peliculas</button>
      <button @click.prevent="goTo(`/generos/${$route.params.genero}/series`)" class="btn btn-primary my-1 mx-1">Series</button>   
      <button @click.prevent="goTo(`/generos/${$route.params.genero}/animes`)" class="btn btn-primary my-1 mx-1">Animes</button>      
    </div>
    <Posters />
    <Pagination />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Pagination from '@/components/Pagination.vue'
import Posters from '@/components/Posters.vue'

export default {
  components: {
    Pagination,
    Posters
  },
  methods: {
    ...mapActions({'getPosters': 'todo/getPosters'}),
    goTo(type) {
      this.$router.push(type)
      this.getPosters({type})
    }
  },
  created() {
    this.getPosters({type: this.$route.path, query: this.$route.query.page})
    document.title = `${process.env.VUE_APP_APP_TITLE} - Genero ${this.$route.params.genero}`
  },
  updated() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - Genero ${this.$route.params.genero}`
  }
}
</script>