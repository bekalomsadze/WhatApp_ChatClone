import i18n from "i18next"

import enTranslation from "./en.json";
import geTranslation from "./ge.json";
import esTranslation from "./es.json";


i18n.init({
  debug: true,
  lng: "English",    // Default Language
  resources: {
    English: {translation: enTranslation},
    Georgian: {translation: geTranslation},
    Spanish: {translation: esTranslation},
  }
})

export default i18n