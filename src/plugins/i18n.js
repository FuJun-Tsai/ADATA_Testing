import { createI18n } from 'vue-i18n';
import tw from '../lang/tw.php';
import en from '../lang/en.php';
import jp from '../lang/jp.php';
import de from '../lang/de.php';

const i18n = createI18n({
  locale: 'tw',
  fallbackLocale: 'tw',
  messages: {
    en,
    tw,
    jp,
    de,
  },
});
export default i18n;
