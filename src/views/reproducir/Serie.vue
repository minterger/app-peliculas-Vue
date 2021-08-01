<template>
  <div class="container-md">
    <Info />
    <Temporadas />
    <Share />
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
import Info from '@/components/Info.vue'
import Temporadas from '@/components/Temporadas.vue'
import Share from '@/components/Share.vue'

export default {
  components: {
    Info,
    Temporadas,
    Share
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getTemporadas': 'todo/getTemporadas'
    }),
    // ...mapMutations({
    //   'updateInfo': 'todo/updateInfo',
    //   'updateTemporadas': 'todo/updateTemporadas'  
    // })
  },
  created() {
    // this.updateInfo()
    this.infoPoster({type: '/serie', info: this.$route.params.serie})
    // this.updateTemporadas()
    this.getTemporadas({type: '/serie', info: this.$route.params.serie})
  }
}
</script>