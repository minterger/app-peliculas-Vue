<template>
  <div class="mt-3">
    <div class="card text-center" v-if="temporadas.seasons">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item" v-for="n in temporadas.seasons" :key="n">
            <a class="nav-link" :class="[n === (active + 1) ? 'active' : '']" aria-current="true" :href="[`#temp${n}`]">Temporada {{n}}</a>
          </li>
        </ul>
      </div>
      <div class="card-body" :id="$route.hash.replace('#', '')">
        <div class=" d-grid gap-2" v-if="temporadas">
          <router-link class="btn btn-info" v-for="capitulo in capitulos" :key="capitulo" :to="capitulo.href">{{capitulo.title}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      active: 0
    }
  },
  watch: {
    '$route.hash'() {
      this.active = parseInt(this.$route.hash.replace('#temp', '')) - 1
    }
  },
  computed: {
    ...mapGetters({
      'temporadas': 'todo/temporadas'
    }),
    capitulos() {
      if (this.temporadas.chapters) {
        return this.temporadas.chapters[this.active]
      }
      return []
    }
  },
  created() {
    if (this.$route.hash) {
      this.active = this.$route.hash.replace('#temp', '')-1
    }
  }
}
</script>

<style scoped>

</style>