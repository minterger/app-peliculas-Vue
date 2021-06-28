<template>
  <div class="container-md">
    <Info />
    <div class="text-center">
      <router-link class="btn btn-primary mt-3" :to="{name: 'Serie', params: {serie: $route.params.serie}}">Volver a los Capitulos</router-link>
    </div>
    <Reproductores />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Info from '@/components/Info.vue'
import Reproductores from '@/components/Reproductores.vue'

export default {
  components: {
    Info,
    Reproductores
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getReproductores': 'todo/getReproductores'
    })
  },
  created() {
    this.infoPoster({type: '/serie', info: this.$route.params.serie})
    this.getReproductores({type: '/serie', info: `${this.$route.params.serie}/temporada/${this.$route.params.temp}/capitulo/${this.$route.params.cap}`})
  }
}
</script>