<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-md">
      <router-link
        class="navbar-brand"
        to="/"
      >
        PelisLatino
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link
              exact-active-class="active"
              class="nav-link"
              to="/"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              to="/peliculas"
              >Peliculas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              to="/series"
              >Series</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              to="/animes"
              >Animes</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Generos</a
            >
            <div class="dropdown-menu mb-2 limit">
              <router-link
                class="dropdown-item"
                v-for="genero in generos"
                :key="genero.name"
                :to="genero.href"
                >{{ genero.name }}</router-link
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Años</a
            >
            <div class="dropdown-menu mb-2 limit">
              <router-link
                class="dropdown-item"
                v-for="year in years"
                :key="year.name"
                :to="year.href"
                >{{ year.name }}</router-link
              >
            </div>
          </li>
        </ul>
        <form @submit.prevent="[searchs(search)]" class="d-flex">
          <input
            class="form-control me-1 me-sm-2"
            type="text"
            v-model="search"
            placeholder="Buscar"
          />
          <button
            class="btn btn-secondary my-2 my-sm-0"
            type="submit"
            title="Buscar"
          >
            <i class="bx bx-search-alt-2"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      generos: "navbar/generos",
      years: "navbar/years",
    }),
    searchQ() {
      return this.search.replace(/\s/g, "+");
    },
  },
  methods: {
    ...mapActions({
      getGeneros: "navbar/getGeneros",
      getYears: "navbar/getYears",
      searching: "navbar/searching",
      searchPoster: "todo/searchPoster",
      getPosters: "todo/getPosters",
    }),
    searchs() {
      this.searching(this.searchQ);
    },
  },
  mounted() {
    this.getGeneros();
    this.getYears();
  },
};
</script>

<style scoped>
nav {
  z-index: 99999999;
}

.bx {
  transform: scale(1.3);
}

.limit {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>