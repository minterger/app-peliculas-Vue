<template>
  <div v-if="ifInfo" class="mt-4">
    <span class="fs-4 fw-bolder text me-3">Comentarios (NO SPOILER - NO SPAM)</span>
    <button class="btn btn-danger btn-sm" @click="comments">{{btnMsg}}</button>
    <div :class="[ hiddeComments ? 'mt-2' : 'mt-4']">
      <Disqus
        v-show="hiddeComments"
        :key="keyComponent"
        :identifier="$route.path"
        lang="es_MX"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Comments',
  data() {
    return {
      keyComponent: this.$route.path,
      hiddeComments: true,
      btnMsg: 'Ocultar Comentarios'
    }
  },
  methods: {
    // reset() {
    //   this.$disqus.reset()
    // },
    comments() {
      if (this.hiddeComments === true) {
        this.hiddeComments = false
        this.btnMsg = 'Mostrar Comentarios'
      } else {
        this.hiddeComments = true
        this.btnMsg = 'Ocultar Comentarios'
      }
    }
  },
  watch: {
    '$route.path'(param) {
      this.keyComponent = param;
    }
  },
  computed: {
    ...mapGetters({'ifInfo': 'todo/ifInfo'})
  },
}
</script>