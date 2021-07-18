<template>
  <div class="container-md">
    <Info />
    <Reproductores />
    <div v-if="ifInfo" class="mt-4">
      <span class="fs-4 fw-bolder text">Comentarios</span>
      <Disqus class="mt-2" :identifier="[$route.path]"/>
    </div>
    <Share />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
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
    })
  },
  computed: {
    ...mapGetters({'ifInfo': 'todo/ifInfo'})
  },
  created() {
    this.infoPoster({type: '/serie', info: this.$route.params.serie})
    this.getReproductores({type: '/serie', info: `${this.$route.params.serie}/temporada/${this.$route.params.temp}/capitulo/${this.$route.params.cap}`})
  }
}
</script>