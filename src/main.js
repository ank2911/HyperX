import { createApp } from 'vue'
import './style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
  })
app.use(vuetify);
app.use(router);
const pinia = createPinia();
app.use(pinia);
app.mount('#app')

