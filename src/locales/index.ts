import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locales from "./locale";
import { globalConfig } from "@/config";
export const reactI18nextInstance = i18n.use(initReactI18next);

export async function setupI18n() {
  await reactI18nextInstance.init({
    lng: globalConfig.defaultLang,
    resources: locales,
  });
}

export const $t = reactI18nextInstance.t;
