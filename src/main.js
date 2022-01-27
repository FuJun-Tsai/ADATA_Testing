import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import bundle from 'bootstrap';
import i18n from './plugins/i18n';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router).use(i18n).use(VueAxios, axios).use(bundle);
app.mount('#app');
