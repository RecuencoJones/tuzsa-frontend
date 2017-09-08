import Vue from 'vue'
import store from './store'
import router from './config/routes'
import i18n from './config/i18n'
import Navbar from './modules/shared/components/Navbar.vue'
import { registerServiceWorker } from './services/service-worker'
import * as WebFont from 'webfontloader'
import './styles/style.scss'

WebFont.load({
  google: {
    families: ['Questrial']
  }
})

registerServiceWorker()

export const app = new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: {
    Navbar
  }
})
