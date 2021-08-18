<template>
  <div class="container-md">
    <h1 class="text-center my-3">Series {{type}}</h1>
    <div class="container text-center mb-3 my-3">
      <router-link exact-active-class="active"
        @click="goTo('/series')" 
        :to="{name: 'Series'}"
        class="btn btn-primary my-1 mx-1">Todas</router-link>
      <router-link exact-active-class="active"
        @click="goTo('/series/estrenos')" 
        :to="{name: 'SeriesType', params: { type: 'estrenos' }}"
        class="btn btn-primary my-1 mx-1">Estrenos</router-link>
      <router-link exact-active-class="active"
        @click="goTo('/series/populares')" 
        :to="{name: 'SeriesType', params: { type: 'populares' }}"
        class="btn btn-primary my-1 mx-1">Populares</router-link>
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
      if (this.$route.name == 'Series' || this.$route.name == 'SeriesType') {
        this.getPagePosters({type: this.$route.path, query: this.$route.query.page})
      }
    }
  },
  mounted() {
    this.getPosters({type: this.$route.path, query: this.$route.query.page})
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Series ${this.type} Online en HD Latino`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Series ${this.type} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  },
  updated() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Series ${this.type} Online en HD Latino`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Series ${this.type} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  }
}
</script>