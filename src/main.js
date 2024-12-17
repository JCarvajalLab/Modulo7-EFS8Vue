import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import store from './store'; // Importa el store de Vuex

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store) // Agrega el store aquí
  .mount('#app');