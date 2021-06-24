<template>
  <div class="container-md">
    <Info />
    <Temporadas />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Info from '@/components/Info.vue'
import Temporadas from '@/components/Temporadas.vue'

export default {
  components: {
    Info,
    Temporadas
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getTemporadas': 'todo/getTemporadas'
    })
  },
  created() {
    this.infoPoster({type: '/anime', info: this.$route.params.anime})
    this.getTemporadas({type: '/anime', info: this.$route.params.anime})
  }
}
</script>