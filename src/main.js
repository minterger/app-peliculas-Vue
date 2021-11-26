import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueDisqus from "vue-disqus";
import { createMetaManager, plugin as vueMetaPlugin } from 'vue-meta'
import { Lazyload } from '@vant/lazyload'

//import mycss
import './assets/mycss/styles.css'

//import myjs
import './assets/myjs/bootstrap.bundle.min.js'

//import boxicon font
import 'boxicons/css/boxicons.min.css'

const lazyOptions = {
  preLoad: 2,
  error: '/img/error-img.jpeg',
  loading: '/img/loading--img.gif',
  attempt: 2
}

const disqusConfig = { shortname: 'pelislatinoga' }

const metaManager = createMetaManager()

createApp(App)
  .use(Lazyload, lazyOptions)
  .use(store)
  .use(vueDisqus, disqusConfig)
  .use(router)
  .use(vueMetaPlugin, {keyName: 'metaInfo'})
  .use(metaManager)
  .mount('#app')
