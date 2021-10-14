<template>
  <div class="container-md">
    <Info />
    <LoadingRepTemp />
    <Temporadas />
    <Share />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Info from '@/components/Info.vue'
import Temporadas from '@/components/Temporadas.vue'
import Share from '@/components/Share.vue'
import LoadingRepTemp from '@/components/LoadingRepTemp.vue'

export default {
  components: {
    Info,
    Temporadas,
    Share,
    LoadingRepTemp
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getTemporadas': 'todo/getTemporadas'
    }),
  },
  mounted() {
    this.infoPoster({type: '/anime', info: this.$route.params.name})
    this.getTemporadas({type: '/anime', info: this.$route.params.name})
  }
}
</script>