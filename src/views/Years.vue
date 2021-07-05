<template>
  <div class="container-md">
    <h1 class="text-center my-3">{{type}} Año {{$route.params.year}}</h1>
    <div class="container text-center my-3 mb-3">
      <router-link exact-active-class="active"
        :to="{name: 'Years', params: { year: $route.params.year }}"
        class="btn btn-primary my-1 mx-1">Todos</router-link>
      <router-link exact-active-class="active"
        :to="{name: 'YearsType', params: { year: $route.params.year, type: 'peliculas' }}"
        class="btn btn-primary my-1 mx-1">Peliculas</router-link>
      <router-link exact-active-class="active"
        :to="{name: 'YearsType', params: { year: $route.params.year, type: 'series' }}"
        class="btn btn-primary my-1 mx-1">Series</router-link>   
      <router-link exact-active-class="active"
        :to="{name: 'YearsType', params: { year: $route.params.year, type: 'animes' }}"
        class="btn btn-primary my-1 mx-1">Animes</router-link>      
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
    ...mapActions({
      'getPosters': 'todo/getPosters',
      'getPagePosters': 'todo/getPagePosters'
      }),
  },
  computed: {
    type() {
      return this.$route.params.type ? this.$route.params.type.charAt(0).toUpperCase() + this.$route.params.type.slice(1) : ''
    }
  },
  watch: {
    '$route'() {
      if (this.$route.name == 'Years' || this.$route.name == 'YearsType') {
        this.getPagePosters({type: this.$route.path, query: this.$route.query.page})
      }
    }
  },
  created() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver ${this.type} Año ${this.$route.params.year} Online en HD Latino`
    this.getPosters({type: this.$route.path, query: this.$route.query.page})
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Peliculas, Series, Animes, Documentales del Año ${this.$route.params.year} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  },
  updated() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver ${this.type} Año ${this.$route.params.year} Online en HD Latino`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Peliculas, Series, Animes, Documentales del Año ${this.$route.params.year} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  }
}
</script>