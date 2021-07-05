<template>
  <div class="container-md">
    <Info />
    <Reproductores />
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
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