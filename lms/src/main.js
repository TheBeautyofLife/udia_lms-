import Vue from 'vue'
import App from './App.vue'
import VueHtmlToPaper from 'vue-html-to-paper'

import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

const options= {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}

Vue.use(VueHtmlToPaper, options)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
