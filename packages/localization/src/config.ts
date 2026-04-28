/* eslint-disable unicorn/prefer-export-from */
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//en
//common
import * as errors from "./locales/en/common/errors.json";
import * as common from "./locales/en/common/common.json";
import symbols from "./locales/en/common/symbols.json";

//hi
import * as commonHi from "./locales/hi/common/common.json";
import * as errorsHi from "./locales/hi/common/errors.json";
import symbolsHi from "./locales/en/common/symbols.json";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: false,
  interpolation: { escapeValue: false },
  resources: {
    en: {
      common,
      errors,
      symbols,
    },
    hi: {
      common: commonHi,
      errors: errorsHi,
      symbols: symbolsHi,
    },
  },
  defaultNS: "common",
  compatibilityJSON: "v3",
});

export default i18next;
