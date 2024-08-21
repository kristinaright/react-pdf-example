import { Font } from "@react-pdf/renderer";
import { fontFamilySettingsMap } from "./fontsMap";
import { setRegisteredFont } from "./setRegisteredFont";

export const useFonts = ({
  locale = "zh",
}: {
  locale: string;
}) => {
  const localeFont =
    fontFamilySettingsMap[locale] || fontFamilySettingsMap["en" as const];
  Font.register(localeFont);

  const styles = setRegisteredFont({ fontFamily: localeFont.family });

  return styles;
};
