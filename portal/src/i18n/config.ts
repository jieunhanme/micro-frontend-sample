import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    lng: "ko", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: `https://65caf321efec34d9ed866e3e.mockapi.io/locales/{{lng}}`,
      parse: function (data: string) {
        return Object.assign(...(JSON.parse(data) as []), {});
      },
    },
  });

export default i18n;
