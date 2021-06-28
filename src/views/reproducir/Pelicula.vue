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
    ...mapMutations({'cleanInfo': 'todo/cleanInfo'})
  },
  created() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.cleanInfo()
    this.infoPoster({type: '/pelicula', info: this.$route.params.pelicula})
    this.getReproductores({type: '/pelicula/rep', info: this.$route.params.pelicula})
  }
}
</script>