<template>
  <div class="row row-cols-1 row-cols-md-3 mt-3">
    <div class="col d-flex justify-content-center">
      <img class="py-3 px-3" :src="info.poster_img" alt="" />
    </div>
    <div class="col pt-3 px-3">
      <h2 class="mb-2">{{info.title}}</h2>
      <p class="desc">
        {{info.descripcion}}
      </p>
      <hr />
      <span><strong>Año: </strong><router-link v-if="info.ano" :title="info.ano.title" :to="info.ano.href">{{info.ano.text}}</router-link></span>
      <br />
      <span><strong>Generos: </strong>
        <span v-for="genero in info.generos" :key="genero.title">
          <router-link :to="genero.href"> {{genero.name}} </router-link>, 
        </span>
      </span>
    </div>
    <div class="col py-3 px-3">
      <span class="d-block mb-2 desc" v-for="item in info.data" :key="item.index">
        <strong>{{item.name + ' '}} </strong>
        <span v-for="i in item.content" :key="i.index">
          <span v-if="i.text"><a href="#">{{i.text}}</a>, </span>
          <span v-else>{{i.fecha}}</span>
        </span>
        <br />
      </span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    }
  },
  computed: {
    ...mapGetters({
      'info': 'todo/info'
    }),
  },
  updated() {
    document.title = `${process.env.VUE_APP_APP_TITLE} - ${this.info.title}`
  }
};
</script>

<style scoped>
  img {
    max-height: 350px;
  }
  .desc{
    max-height: 130px;
    overflow-y: auto;
  }
  strong {
    color: lightcoral;
  }
  a {
    text-decoration: none;
  }
</style>