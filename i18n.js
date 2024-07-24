import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import he from "./localizations/hebrew";
export let deviceLanguage = getLocales()?.[0]?.languageCode ?? "en";

export const i18n = new I18n({
  he,
});

i18n.defaultLocale = "he";
i18n.locale = "he";
i18n.enableFallback = true;
