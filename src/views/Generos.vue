<template>
  <div class="container-md">
    <h1 class="text-center my-3 text-capitalize">Genero {{type}} de {{genero}}</h1>
    <div class="container text-center my-3 mb-3">
      <router-link exact-active-class="active"
        :to="{name: 'Generos', params: { genero: $route.params.genero }}"
        class="btn btn-primary my-1 mx-1">Todos</router-link>
      <router-link exact-active-class="active"
        :to="{name: 'GenerosType', params: { genero: $route.params.genero, type: 'peliculas' }}"
        class="btn btn-primary my-1 mx-1">Peliculas</router-link>
      <router-link exact-active-class="active"
        :to="{name: 'GenerosType', params: { genero: $route.params.genero, type: 'series' }}"
        class="btn btn-primary my-1 mx-1">Series</router-link>   
      <router-link exact-active-class="active"
        :to="{name: 'GenerosType', params: { genero: $route.params.genero, type: 'animes' }}"
        class="btn btn-primary my-1 mx-1">Animes</router-link>      
    </div>
    <Loading/>
    <Posters />
    <Pagination />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Pagination from '@/components/Pagination.vue'
import Posters from '@/components/Posters.vue'
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Pagination,
    Posters,
    Loading
  },
  methods: {
    ...mapActions({
      'getPosters': 'todo/getPosters',
      'getPagePosters': 'todo/getPagePosters'
      }),
  },
  computed: {
    type() {
      return this.$route.params.type ? this.$route.params.type.charAt(0).toUpperCase() + this.$route.params.type.slice(1) : ''
    },
    genero() {
      return this.$route.params.genero ? (this.$route.params.genero.charAt(0).toUpperCase() + this.$route.params.genero.slice(1)).replace(/\-+/g, ' ') : ''
    }
  },
  watch: {
    '$route.path'() {
      if (this.$route.name == 'Generos' || this.$route.name == 'GenerosType') {
        this.getPosters({type: this.$route.path, query: this.$route.query.page})
      }
    },
    '$route.query.page'() {
      if (this.$route.name == 'Generos' || this.$route.name == 'GenerosType') {
        this.getPagePosters({type: this.$route.path, query: this.$route.query.page})
      }
    }
  },
  mounted() {
    this.getPosters({type: this.$route.path, query: this.$route.query.page})
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Genero ${this.type} de ${this.genero} Online en HD Latino`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Peliculas, Series, Animes de ${this.genero} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  },
  updated() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Genero ${this.type} de ${this.genero} Online en HD Latino`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Peliculas, Series, Animes de ${this.genero} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  }
}
</script>