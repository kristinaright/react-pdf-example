import { localesMap } from "ui/src/hooks/i18n";
import resolveAcceptLanguage from "resolve-accept-language";

export const getLocale = (acceptLanguage: string) => {
  try {
    const locale = resolveAcceptLanguage(
      acceptLanguage,
      Object.keys(localesMap),
      Object.keys(localesMap)[0],
    );
    return localesMap[locale];
  } catch (e) {
    console.error(e);
    return Object.values(localesMap)[0];
  }
};
