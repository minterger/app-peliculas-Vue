<template>
  <div class="mb-4 row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xl-6 g-4">
    <div class="col" v-for="poster in posters" :key="poster.poster_link">
      <router-link class="card mb-2" @click="clearInfoData" :to="poster.poster_link">
        <img v-lazy="poster.poster.src" :alt="poster.poster.alt" class="card-img-top">
        <div class="card-body">
          <span class="card-title">{{poster.title}}</span>
          <p class="card-text"><i class='bx bxs-star'></i> {{poster.raiting}}</p>
        </div>
        <div class="type" v-if="poster.type">
          <span>{{poster.type}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapGetters({'posters': 'todo/posters'}),

  },
  methods: {
    ...mapMutations({
      'updateInfo': 'todo/updateInfo',
      'updateTemporadas': 'todo/updateTemporadas'
    }),
    clearInfoData() {
      this.updateInfo()
      this.updateTemporadas()
    }
  }
}
</script>

<style scoped>
  * {
    text-decoration: none;
    color: #fff;
  }
  .bx {
    color: #ffe100;
  }
  .card-text {
    color: darkcyan;

  }

  .card {
    position: relative;
  }

  .card-title {
    font-size: 1.09em;
  }

  .card-img-top {
    min-height: 200px;
  }

  .type {
    position: absolute;
    top: 5px;
    left: 5px;
    vertical-align: middle;
    padding: 3px 12px 3px 12px;
    border-radius: 17px;
    background-color: rgb(0, 0, 0);
  }
  .type span {
    color: #fff;
  }

  /* media queries screen max width */
  @media screen and (max-width: 575.98px) {
    .card-img-top {
      min-height: 150px;
    }
  }
</style>