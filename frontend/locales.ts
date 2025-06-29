// SPDX-License-Identifier: AGPL-3.0-or-later
export enum LOCALE_NAME {
  ENGLISH = "English",
  HINDI = "हिन्दी",
  MALAYALAM = "മലയാളം",
  NEPALI = "नेपाली",
  TAMIL = "தமிழ்",
  TELUGU = "తెలుగు",
}

export enum LOCALE_CODE {
  ENGLISH = "en",
  HINDI = "hi",
  MALAYALAM = "ml",
  NEPALI = "ne",
  TAMIL = "ta",
  TELUGU = "te",
}

export interface Locale {
  code: string;
  language: string;
  name: string;
  file: string;
  isCatchallLocale?: boolean;
}

export const locales: Locale[] = [
  {
    code: LOCALE_CODE.ENGLISH,
    language: "en-US",
    name: LOCALE_NAME.ENGLISH,
    file: "../en-US.json",
    isCatchallLocale: true,
  },
  {
    code: LOCALE_CODE.HINDI,
    language: "hi",
    name: LOCALE_NAME.HINDI,
    file: "../hi.json",
    isCatchallLocale: false,
  },
  {
    code: LOCALE_CODE.MALAYALAM,
    language: "ml",
    name: LOCALE_NAME.MALAYALAM,
    file: "../ml.json",
    isCatchallLocale: false,
  },
  {
    code: LOCALE_CODE.NEPALI,
    language: "ne",
    name: LOCALE_NAME.NEPALI,
    file: "../ne.json",
    isCatchallLocale: false,
  },
  {
    code: LOCALE_CODE.TAMIL,
    language: "ta",
    name: LOCALE_NAME.TAMIL,
    file: "../ta.json",
    isCatchallLocale: false,
  },
  {
    code: LOCALE_CODE.TELUGU,
    language: "te",
    name: LOCALE_NAME.TELUGU,
    file: "../te.json",
    isCatchallLocale: false,
  },
];

export default locales;
