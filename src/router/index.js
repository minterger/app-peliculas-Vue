import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'@/views/Home.vue'),
    children: [
      {
        path: 'last',
        name: 'HomeLast',
        component: () => import(/* webpackChunkName: "HomeLast" */'@/views/Home.vue')
      },
    ]
  },

  //peliculas routes
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: () => import(/* webpackChunkName: "Peliculas" */'@/views/Peliculas.vue'),
    children: [
      {
        path: ':type',
        name: 'PeliculasType',
        component: () => import(/* webpackChunkName: "PeliculasType" */'@/views/Peliculas.vue'),
      },
    ]
  },
  {
    path: '/pelicula/:pelicula',
    name: 'Pelicula',
    component: () => import (/* webpackChunkName: "Pelicula" */'@/views/reproducir/Pelicula.vue')
  },

  //series routes
  {
    path: '/series',
    name: 'Series',
    component: () => import(/* webpackChunkName: "Series" */'@/views/Series.vue'),
    children: [
      {
        path: ':type',
        name: 'SeriesType',
        component: () => import(/* webpackChunkName: "SeriesType" */'@/views/Series.vue')
      },
    ]
  },
  {
    path: '/serie/:serie',
    name: 'Serie',
    component: () => import(/* webpackChunkName: "Serie" */'@/views/reproducir/Serie.vue')
  },
  {
    path: '/serie/:serie/temporada/:temp/capitulo/:cap',
    name: 'SerieRep',
    component: () => import(/* webpackChunkName: "SerieRep" */'@/views/reproducir/RepSerie.vue')
  },

  //animes routes
  {
    path: '/animes',
    name: 'Animes',
    component: () => import(/* webpackChunkName: "Animes" */'@/views/Animes.vue'),
    children: [
      {
        path: ':type',
        name: 'AnimesType',
        component: () => import(/* webpackChunkName: "AnimesType" */'@/views/Animes.vue')
      },
    ]
  },
  {
    path: '/anime/:anime',
    name: 'Anime',
    component: () => import(/* webpackChunkName: "Anime" */'@/views/reproducir/Anime.vue')
  },
  {
    path: '/anime/:anime/temporada/:temp/capitulo/:cap',
    name: 'AnimeRep',
    component: () => import(/* webpackChunkName: "AnimeRep" */'@/views/reproducir/RepAnime.vue')
  },

  //search route
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */'@/views/Search.vue')
  },

  //generos and years routes
  {
    path: '/generos/:genero',
    name: 'Generos',
    component: () => import(/* webpackChunkName: "Generos" */'@/views/Generos.vue'),
    children: [
      {
        path: ':type',
        name: 'GenerosType',
        component: () => import(/* webpackChunkName: "GenerosType" */'@/views/Generos.vue')
      },
    ]
  },
  {
    path: '/year/:year',
    name: 'Years',
    component: () => import(/* webpackChunkName: "Years" */'@/views/Years.vue'),
    children: [
      {
        path: '/year/:year/:type',
        name: 'YearsType',
        component: () => import(/* webpackChunkName: "YearsType" */'@/views/Years.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */'@/views/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
