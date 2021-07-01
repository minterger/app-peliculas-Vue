<template>
  <div class="container-md">
    <Info />
    <Temporadas />
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
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
    }),
    ...mapMutations({
      'cleanInfo': 'todo/cleanInfo',
      'cleanTemporadas': 'todo/cleanTemporadas'  
    })
  },
  created() {
    this.cleanInfo()
    this.infoPoster({type: '/serie', info: this.$route.params.serie})
    this.cleanTemporadas()
    this.getTemporadas({type: '/serie', info: this.$route.params.serie})
  }
}
</script>