<template>
  <div class="container-md">
    <Info />
    <Reproductores />
    <Comments />
    <Share />
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'
import Info from '@/components/Info.vue'
import Reproductores from '@/components/Reproductores.vue'
import Comments from '@/components/Comments.vue'
import Share from '@/components/Share.vue'

export default {
  components: {
    Info,
    Reproductores,
    Comments,
    Share
  },
  methods: {
    ...mapActions({
      'infoPoster': 'todo/infoPoster',
      'getReproductores': 'todo/getReproductores'
    }),
  },
  computed: {
    ...mapGetters({'ifInfo': 'todo/ifInfo'})
  },
  created() {
    this.infoPoster({type: '/pelicula', info: this.$route.params.name})
    this.getReproductores({type: '/pelicula/rep', info: this.$route.params.name})
  }
}
</script>