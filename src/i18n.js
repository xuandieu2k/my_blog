// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Tải tài nguyên ngôn ngữ từ server (nếu cần)
  .use(LanguageDetector) // Phát hiện ngôn ngữ của người dùng
  .use(initReactI18next) // Cung cấp i18n cho React
  .init({
    fallbackLng: 'en', // Ngôn ngữ dự phòng nếu ngôn ngữ của người dùng không có
    debug: true, // Bật chế độ debug (tùy chọn)
    interpolation: {
      escapeValue: false, // React đã tự động escape giá trị
    },
    backend: {
      // Cấu hình backend nếu cần
    },
  });

export default i18n;
