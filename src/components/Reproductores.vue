<template>
  <div class="mt-3">
    <div v-if="reproductores.length">
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-pills card-header-pills">
            <li class="nav-item" v-for="n in reproductores.length" :key="n">
              <a class="nav-link" :class="[n === (active+1)? 'active' : '']" @click="changeRep(n)" aria-current="true" :href="[`#opc${n}`]">Opcion {{n}}</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="ratio ratio-16x9">
            <iframe :src="reproductores[active]" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapGetters({
      'reproductores': 'todo/reproductores'
    })
  },
  methods: {
    changeRep(n) {
      this.active = n - 1
    }
  },
  created() {
    if (this.$route.hash) {
      this.active = this.$route.hash.replace('#opc', '')-1
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .ratio {
    transform: scale(1.05);
  }
}
</style>