<template>
  <div class="mb-4 row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xl-6 g-4">
    <div class="col" v-for="poster in posters" :key="poster.i">
      <router-link class="card mb-2" :to="poster.poster_link">
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
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({'posters': 'todo/posters'}),

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
    color: #72e9e9;
  }

  .card {
    position: relative;
  }

  .card-title {
    font-size: 1.09em;
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
</style>