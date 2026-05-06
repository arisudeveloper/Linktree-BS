import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEn from "../src/locales/en/home.json"
import homeEs from "../src/locales/es/home.json"
import homeFr from "../src/locales/fr/home.json"



i18n.use(initReactI18next).init({
  resources: {
    en: 
    { 
      home: homeEn, 
    },
    es: 
    { 
      home: homeEs, 
    },
    fr: 
    { 
      home: homeFr, 
    }
  },
  lng: "en", // idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;