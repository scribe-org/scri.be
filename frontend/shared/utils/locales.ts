// SPDX-License-Identifier: AGPL-3.0-or-later
import type { LocaleObject } from "@nuxtjs/i18n";

export enum LOCALE_NAME {
  BENGALI = "বাংলা",
  ENGLISH = "English",
  GREEK = "Ελληνικά",
  HINDI = "हिन्दी",
  MALAYALAM = "മലയാളം",
  NEPALI = "नेपाली",
  TAMIL = "தமிழ்",
  TELUGU = "తెలుగు",
}

export enum LOCALE_CODE {
  BENGALI = "bn",
  ENGLISH = "en",
  GREEK = "el",
  HINDI = "hi",
  MALAYALAM = "ml",
  NEPALI = "ne",
  TAMIL = "ta",
  TELUGU = "te",
}

export const locales: LocaleObject<
  "bn" | "en" | "el" | "hi" | "ml" | "ne" | "ta" | "te"
>[] = [
  {
    code: LOCALE_CODE.BENGALI,
    name: LOCALE_NAME.BENGALI,
    file: "bn.json",
  },
  {
    code: LOCALE_CODE.ENGLISH,
    name: LOCALE_NAME.ENGLISH,
    file: "en-US.json",
  },
  {
    code: LOCALE_CODE.GREEK,
    name: LOCALE_NAME.GREEK,
    file: "el.json",
  },
  {
    code: LOCALE_CODE.HINDI,
    name: LOCALE_NAME.HINDI,
    file: "hi.json",
  },
  {
    code: LOCALE_CODE.MALAYALAM,
    name: LOCALE_NAME.MALAYALAM,
    file: "ml.json",
  },
  {
    code: LOCALE_CODE.NEPALI,
    name: LOCALE_NAME.NEPALI,
    file: "ne.json",
  },
  {
    code: LOCALE_CODE.TAMIL,
    name: LOCALE_NAME.TAMIL,
    file: "ta.json",
  },
  {
    code: LOCALE_CODE.TELUGU,
    name: LOCALE_NAME.TELUGU,
    file: "te.json",
  },
];

export default locales;
