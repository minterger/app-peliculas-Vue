<template>
  <div v-if="ifInfo" class="mt-4">
    <span class="fs-4 fw-bolder text">Comentarios</span>
    <div class="mt-2">
      <Disqus
        :key="keyComponent"
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
  data() {
    return {
      keyComponent: this.$route.path
    }
  },
  methods: {
    reset() {
      this.$disqus.reset()
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