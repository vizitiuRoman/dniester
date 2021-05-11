import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from './resources/en.json';
import ru from './resources/ru.json';
import ro from './resources/ro.json';

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
    ro: {
        translation: ro,
    },
} as {};

i18n.use(initReactI18next).init({
    lng: 'en',
    resources,
});

export default i18n;
