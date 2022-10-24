import i18n from "@sveltekit-i18n/base";
import parser from "@sveltekit-i18n/parser-default";
import type { Config } from "@sveltekit-i18n/parser-default";

import lang from "./lang.json";
import * as customModifiers from "./modifiers";
import type { CurrencyProps } from "./modifiers";

const config: Config<{ placeholder?: string; value?: any; count?: number }, CurrencyProps> = {
  initLocale: "ko",
  parser: parser({
    customModifiers,
  }),
  translations: {
    en: { lang },
    ko: { lang },
  },
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default,
    },
    {
      locale: "ko",
      key: "common",
      loader: async () => (await import("./ko/common.json")).default,
    },
  ],
};

export const { t, locale, locales, loading, translations, loadTranslations } = new i18n(config);

loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log("Loading translations...");
    await loading.toPromise();
    console.log("Updated translations", translations.get());
  }
});
