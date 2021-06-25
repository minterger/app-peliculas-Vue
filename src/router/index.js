import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/last',
    name: 'HomeLast',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: () => import('../views/Peliculas.vue')
  },
  {
    path: '/peliculas/:type',
    name: 'PeliculasType',
    component: () => import('../views/Peliculas.vue')
  },
  {
    path: '/pelicula/:pelicula',
    name: 'Pelicula',
    component: () => import ('../views/reproducir/Pelicula.vue')
  },
  {
    path: '/series',
    name: 'Series',
    component: () => import('../views/Series.vue')
  },
  {
    path: '/series/:type',
    name: 'SeriesType',
    component: () => import('../views/Series.vue')
  },
  {
    path: '/serie/:serie',
    name: 'Serie',
    component: () => import('../views/reproducir/Serie.vue')
  },
  {
    path: '/serie/:serie/temporada/:temp/capitulo/:cap',
    name: 'SerieRep',
    component: () => import('../views/reproducir/RepSerie.vue')
  },
  {
    path: '/animes',
    name: 'Animes',
    component: () => import('../views/Animes.vue')
  },
  {
    path: '/animes/:type',
    name: 'AnimesType',
    component: () => import('../views/Animes.vue')
  },
  {
    path: '/anime/:anime',
    name: 'Anime',
    component: () => import('../views/reproducir/Anime.vue')
  },
  {
    path: '/anime/:anime/temporada/:temp/capitulo/:cap',
    name: 'AnimeRep',
    component: () => import('../views/reproducir/RepAnime.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/generos/:genero',
    name: 'Generos',
    component: () => import('../views/Generos.vue')
  },
  {
    path: '/generos/:genero/:type',
    name: 'GenerosType',
    component: () => import('../views/Generos.vue')
  },
  {
    path: '/year/:year',
    name: 'Years',
    component: () => import('../views/Years.vue')
  },
  {
    path: '/year/:year/:type',
    name: 'YearsType',
    component: () => import('../views/Years.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
