<template>
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xl-6 g-4">
    <div class="col" v-for="poster in posters.posters" :key="poster.i">
      <router-link class="card mb-2" :to="poster.poster_link">
        <img :src="poster.poster.src" :alt="poster.poster.alt" class="card-img-top">
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

  img {
    width: 100%;
  }

  .card {
    position: relative;
  }

  .card-title {
    font-size: 1.09em;
  }

  .type {
    position: absolute;
    top: 0px;
    right: 0;
    vertical-align: middle;
    padding: 5px 15px 5px 15px;
    border-radius: 0px 0 0px 15px;
    background-color: rgba(17, 23, 34, 0.837);
  }
  .type span {
    color: #fff;
  }
</style>