import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'last',
        name: 'HomeLast',
        component: () => import('@/views/Home.vue')
      },
    ]
  },

  //peliculas routes
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: () => import('../views/Peliculas.vue'),
    children: [
      {
        path: ':type',
        name: 'PeliculasType',
        component: () => import('../views/Peliculas.vue'),
      },
    ]
  },
  {
    path: '/pelicula/:pelicula',
    name: 'Pelicula',
    component: () => import ('../views/reproducir/Pelicula.vue')
  },

  //series routes
  {
    path: '/series',
    name: 'Series',
    component: () => import('../views/Series.vue'),
    children: [
      {
        path: ':type',
        name: 'SeriesType',
        component: () => import('../views/Series.vue')
      },
    ]
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

  //animes routes
  {
    path: '/animes',
    name: 'Animes',
    component: () => import('../views/Animes.vue'),
    children: [
      {
        path: ':type',
        name: 'AnimesType',
        component: () => import('../views/Animes.vue')
      },
    ]
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

  //search route
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },

  //generos and years routes
  {
    path: '/generos/:genero',
    name: 'Generos',
    component: () => import('../views/Generos.vue'),
    children: [
      {
        path: ':type',
        name: 'GenerosType',
        component: () => import('../views/Generos.vue')
      },
    ]
  },
  {
    path: '/year/:year',
    name: 'Years',
    component: () => import('../views/Years.vue'),
    children: [
      {
        path: '/year/:year/:type',
        name: 'YearsType',
        component: () => import('../views/Years.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
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
