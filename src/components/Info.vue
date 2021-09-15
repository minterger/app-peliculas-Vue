<template>
  <div>
    <div v-if="info.title" class="row row-cols-1 row-cols-md-3 mt-3">
      <div class="col col-img col-lg-3 d-flex justify-content-center ">
        <div>
          <img class="py-3 px-3" v-lazy="info.poster_img" alt="" />
        </div>
      </div>
      <div class="col pt-3 px-3">
        <h2 class="mb-2">{{info.title}} {{temp}}</h2>
        <p class="desc">
          {{info.descripcion}}
        </p>
        <hr />
        <span><strong>Año: </strong><router-link v-if="info.ano" :title="info.ano.title" :to="info.ano.href">{{info.ano.text}}</router-link></span>
        <br />
        <span><strong>Generos: </strong>
          <span v-for="genero in info.generos" :key="genero.title">
            <router-link :title="genero.title" :to="genero.href"> {{genero.name}} </router-link>, 
          </span>
        </span>
      </div>
      <div class="col py-3 px-3">
        <span class="d-block mb-2 desc" v-for="item in info.data" :key="item.index">
          <strong>{{item.name + ' '}} </strong>
          <span v-for="i in item.content" :key="i.index">
            <span v-if="i.text"><router-link :title="i.title" :to="i.href">{{i.text}}</router-link>, </span>
            <span v-else>{{i.fecha}}</span>
          </span>
          <br />
        </span>
        <span class="raiting fst-normal">
          <i class='bx bxs-star'></i> {{info.raiting}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({infoPoster: 'todo/infoPoster'})
  },
  watch: {
    '$route.params.name'(info) {
      const name = this.$route.name
      if (info) {
        if (name == 'Pelicula') {
          this.infoPoster({type: '/pelicula', info})
        } else if (name == 'Anime' || name == 'AnimeRep') {
          this.infoPoster({type: '/anime', info})
        } else if (name == 'Serie' || name == 'SerieRep') {
          this.infoPoster({type: '/serie', info})
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      'info': 'todo/info'
    }),
    temp() {
      if (this.$route.params.temp && this.$route.params.cap) {
        return `- Temporada ${this.$route.params.temp} - Capitulo ${this.$route.params.cap}`
      }
      return ''
    }
  },
  updated() {
    document.title = `Ver ${this.info.title} ${this.temp} Online Latino HD - ${process.env.VUE_APP_APP_TITLE}`
    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `Ver ${this.info.title}: ${this.info.descripcion}`)
  }
};
</script>

<style scoped>
  img {
    width: 245px;
  }
  .col-img {
    min-height: 360px;
  }
  .desc{
    max-height: 130px;
    overflow-y: auto;
  }

  strong {
    color: rgb(253, 76, 112);
  }
  a {
    text-decoration: none;
    color: #4C9BE8;
  }

  .bx {
    color: #ffe100;
    font-weight: 600;
  }
  .raiting {
    color: darkcyan;
    font-weight: 500;
  }
</style>