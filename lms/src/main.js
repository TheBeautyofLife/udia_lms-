import Vue from 'vue'
import App from './App.vue'
import VueHtmlToPaper from 'vue-html-to-paper'

import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'

Vue.use(VueHtmlToPaper, options)
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



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
