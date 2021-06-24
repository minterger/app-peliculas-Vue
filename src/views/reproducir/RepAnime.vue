<template>
  <div class="container-md">
    <Info />
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
    this.infoPoster({type: '/anime', info: this.$route.params.anime})
    this.getReproductores({type: '/anime', info: `${this.$route.params.anime}/temporada/${this.$route.params.temp}/capitulo/${this.$route.params.cap}`})
  }
}
</script>