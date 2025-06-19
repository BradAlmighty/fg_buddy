import { createApp } from 'vue'
import './style.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
