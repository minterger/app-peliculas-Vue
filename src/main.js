import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueDisqus from "vue-disqus";
import { createMetaManager, plugin as vueMetaPlugin } from 'vue-meta'
import { Lazyload } from '@vant/lazyload'


const lazyOptions = {
  preLoad: 2,
  error: '/img/error-img.jpeg',
  loading: '/img/loading--img.gif',
  attempt: 2
}

const disqusConfig = { shortname: 'pelislatinoga' }

const metaManager = createMetaManager()

createApp(App).use(Lazyload, lazyOptions).use(store).use(vueDisqus, disqusConfig).use(router).use(metaManager).use(vueMetaPlugin).mount('#app')
