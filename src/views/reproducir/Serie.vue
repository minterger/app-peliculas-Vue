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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.cleanInfo()
    this.infoPoster({type: '/serie', info: this.$route.params.serie})
    this.cleanTemporadas()
    this.getTemporadas({type: '/serie', info: this.$route.params.serie})
  }
}
</script>