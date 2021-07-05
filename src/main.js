import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyloadNext from 'vue-lazyload-next'

const lazyOptions = {
  preLoad: 2,
  error: '/img/error-img.jpeg',
  loading: '/img/loading-img.gif',
  attempt: 2
}

createApp(App).use(VueLazyloadNext, lazyOptions).use(store).use(router).mount('#app')
