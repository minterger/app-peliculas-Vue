<template>
  <div class="container-md">
    <Info />
    <Reproductores />
    <div class="mt-4">
      <span class="fs-4 fw-bolder text">Comentarios</span>
      <Disqus class="mt-2" :identifier="[$route.path]"/>
      <Share />
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
import Info from '@/components/Info.vue'
import Reproductores from '@/components/Reproductores.vue'
import Share from '@/components/Share.vue'

export default {
  components: {
    Info,
    Reproductores,
    Share
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getReproductores': 'todo/getReproductores'
    }),
    ...mapMutations({'updateInfo': 'todo/updateInfo'})
  },
  created() {
    this.updateInfo()
    this.infoPoster({type: '/pelicula', info: this.$route.params.pelicula})
    this.getReproductores({type: '/pelicula/rep', info: this.$route.params.pelicula})
  }
}
</script>