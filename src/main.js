import { createApp } from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router, VueI18n).use(VueAxios, axios);
app.mount('#app');
