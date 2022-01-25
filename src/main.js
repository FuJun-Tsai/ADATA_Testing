import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import VueAxios from 'vue-axios';
import axios from 'axios';
import bundle from 'bootstrap';
import App from './App.vue';
import en from './lang/en.json';
import tw from './lang/tw.json';
import router from './router';

const app = createApp(App);
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'en',
  //   fallbackLocale: 'en-US',
  globalInjection: true,
  messages: {
    en,
    tw,
  },
});

app.use(router).use(i18n).use(VueAxios, axios).use(bundle);

app.mount('#app');
