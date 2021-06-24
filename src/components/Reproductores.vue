<template>
  <div class="mt-3">
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item" v-for="n in reproductores.length" :key="n">
            <a class="nav-link" :class="[n === (active+1)? 'active' : '']" @click.prevent="changeRep(n)" aria-current="true" href="#">Opcion {{n}}</a>
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
  }
}
</script>