/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["uk", "en"], // Поддерживаемые языки: украинский и английский
    defaultLocale: "uk", // Язык по умолчанию - украинский
    localeDetection: false, // Отключение автоматического определения и добавления языкового префикса
  },
};
  
export default nextConfig;