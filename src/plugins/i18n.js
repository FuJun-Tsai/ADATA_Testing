import { createI18n } from 'vue-i18n';
import tw from '../lang/tw.json';
import en from '../lang/en.json';

const i18n = createI18n({
  locale: localStorage.getItem('lang  '),
  fallbackLocale: 'tw',
  messages: {
    en,
    tw,
  },
});

export default i18n;
