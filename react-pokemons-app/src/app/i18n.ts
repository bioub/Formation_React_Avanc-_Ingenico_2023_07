import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';

i18n
  .use(initReactI18next)
  .use(i18nextXhrBackend)
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    supportedLngs: ['en', 'fr'],
    interpolation: {
      escapeValue: false, // react echappe déjà
    },
  });
