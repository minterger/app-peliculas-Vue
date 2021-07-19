<template>
  <div v-if="ifInfo" class="mt-4">
    <span class="fs-4 fw-bolder text">Comentarios</span>
    <div class="mt-2">
      <Disqus
        ref="disqus"
        :identifier="$route.path"
        lang="es_AR"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Comments',
  methods: {
    reset() {
      this.$disqus.reset()
    }
  },
  watch: {
    '$route.params'() {
        this.reset()
    }
  },
  computed: {
    ...mapGetters({'ifInfo': 'todo/ifInfo'})
  },
}
</script>