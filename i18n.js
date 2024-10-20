import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Файлы переводов
import uk from './app/locales/uk.json';
import en from './app/locales/en.json';

// Инициализация i18n
i18n.use(initReactI18next) // Связываем i18next с React
  .init({
    resources: {
      uk: { translation: uk },
      en: { translation: en },
    },
    lng: 'uk', // Язык по умолчанию
    fallbackLng: 'uk', // Резервный язык
    interpolation: {
      escapeValue: false, // Отключаем экранирование, так как React уже экранирует строки
    },
  });

export default i18n;
