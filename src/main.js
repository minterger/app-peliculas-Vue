import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyloadNext from 'vue-lazyload-next'

const lazyOptions = {
    error: '/img/error.jpeg',
    loading: '/img/loading.gif',
  }

createApp(App).use(VueLazyloadNext, lazyOptions).use(store).use(router).mount('#app')
