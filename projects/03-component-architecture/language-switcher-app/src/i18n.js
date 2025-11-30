import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            welcome: "Welcome to our application!",
            select_language: "Please select a language",
        },
    },
    es: {
        translation: {
            welcome: "¡Bienvenido a nuestra aplicación!",
            select_language: "Por favor, seleccione un idioma",
        },
    },
};

i18n.use(initReactI18next) // passes i18n instance to react-i18next
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
