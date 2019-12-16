import Vue from "vue";
import Vuetify from "vuetify/lib"
import "vuetify/dist/vuetify.min.css"

import { TiptapVuetifyPlugin } from "tiptap-vuetify"
import "tiptap-vuetify/dist/main.css"


const vuetify = new Vuetify({
  lang: {
    current: "en" // en | es | fr | pl | ru
  }
})

const iconsGroup = "mdi"

Vue.use(Vuetify)

Vue.use(TiptapVuetifyPlugin, { vuetify, iconsGroup })

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
})
