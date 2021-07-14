import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {useMeta} from ' vue-meta'
import VueLazyload from '@jambonn/vue-lazyload'

const lazyOptions = {
  preLoad: 2,
  error: '/img/error-img.jpeg',
  loading: '/img/loading--img.gif',
  attempt: 2
}

createApp(App).use(VueLazyload, lazyOptions).use(store).use(router).mount('#app')
