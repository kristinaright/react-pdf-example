import { locales } from "../../lingui.config";

export type Locale = (typeof locales)[number];

export const localesMap: Record<string, Locale> = {
  "en-US": "en",
  "es-ES": "es",
  "it-IT": "it",
  "fr-FR": "fr",
  "de-DE": "de",
  "pt-PT": "pt",
  "tr-TR": "tr",
  "ru-RU": "ru",
  "ko-KR": "ko",
  "ja-JP": "ja",
  "en-JP": "ja",
  "zh-CN": "zh",
  "en-CN": "zh",
  "vi-VN": "vi",
  "pl-PL": "pl",
};
