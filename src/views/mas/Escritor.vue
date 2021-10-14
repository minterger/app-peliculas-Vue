<template>
  <div class="container-md">
    <h1 class="text-center my-3 text-capitalize">Escritor {{type}}</h1>
    <Loading />
    <Posters />
    <Pagination />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Pagination from '@/components/Pagination.vue'
import Posters from '@/components/Posters.vue'
import Loading from '@/components/Loading.vue'

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
      return this.$route.params.escritor ? (this.$route.params.escritor.charAt(0).toUpperCase() + this.$route.params.escritor.slice(1)).replace(/\-+/g, ' ') : ''
    }
  },
  watch: {
    '$route.path'() {
      if (this.$route.name == 'Escritor') {
        this.getPosters({type: this.$route.path, query: this.$route.query.page})
      }
    },
    '$route.query.page'() {
      if (this.$route.name == 'Escritor') {
        this.getPagePosters({type: this.$route.path, query: this.$route.query.page})
      }
    }
  },
  created() {
    this.getPosters({type: this.$route.path, query: this.$route.query.page})
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Escritor ${this.type} Online en HD Latino`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Peliculas, Series, Animes de ${this.type} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  },
  updated() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - Ver Escritor ${this.type}Online en HD Latino`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver Todas Las Peliculas, Series, Animes de ${this.type} Online HD en español Latino con los mejores servidores y la mejor calidad de streaming`)
  }
}
</script>