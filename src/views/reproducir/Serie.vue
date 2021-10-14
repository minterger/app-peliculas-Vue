<template>
  <div class="container-md">
    <Info />
    <Loading class="loading" />
    <Temporadas />
    <Share />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Info from '@/components/Info.vue'
import Temporadas from '@/components/Temporadas.vue'
import Share from '@/components/Share.vue'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    Info,
    Temporadas,
    Share,
    Loading
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getTemporadas': 'todo/getTemporadas'
    }),
  },
  mounted() {
    this.infoPoster({type: '/serie', info: this.$route.params.name})
    this.getTemporadas({type: '/serie', info: this.$route.params.name})
  }
}
</script>

<style scoped>
.loading {
  margin-top: 50px;
}
</style>