import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/EN.json';
import translationJA from './locales/ja.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;