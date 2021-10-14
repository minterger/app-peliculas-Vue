<template>
  <div class="container-md">
    <Info />
    <LoadingRepTemp />
    <Reproductores />
    <Comments />
    <Share />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Info from '@/components/Info.vue'
import Reproductores from '@/components/Reproductores.vue'
import Comments from '@/components/Comments.vue'
import Share from '@/components/Share.vue'
import LoadingRepTemp from '@/components/LoadingRepTemp.vue'

export default {
  components: {
    Info,
    Reproductores,
    Comments,
    Share,
    LoadingRepTemp
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getReproductores': 'todo/getReproductores'
    }),
  },
  mounted() {
    this.infoPoster({type: '/pelicula', info: this.$route.params.name})
    this.getReproductores({type: '/pelicula/rep', info: this.$route.params.name})
  }
}
</script>