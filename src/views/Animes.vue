<template>
  <div class="container-md">
    <h1 class="text-center my-3">Animes {{$route.params.type}}</h1>
    <div class="container text-center mb-3 my-3">
      <button @click.prevent="goTo('/animes')" class="btn btn-primary my-1 me-2">Todas</button>
      <button @click.prevent="goTo('/animes/estrenos')" class="btn btn-primary my-1 me-2">Estrenos</button>
      <button @click.prevent="goTo('/animes/populares')" class="btn btn-primary my-1">Populares</button>
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
    Posters,
  },
  methods: {
    ...mapActions({'getPosters': 'todo/getPosters'}),
    goTo(type) {
      this.$router.push(type)
      this.getPosters({type})
    }
  },
  computed: {
    typeTitle() {
      return this.$route.params.type ? this.$route.params.type : ''
    }
  },
  created() {
    this.getPosters({type: this.$route.path, query: this.$route.query.page})
    document.title = `${process.env.VUE_APP_APP_TITLE} - Animes ${this.typeTitle}`
  },
  updated() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - Animes ${this.typeTitle}`
  }
}
</script>