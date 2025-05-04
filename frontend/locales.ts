// SPDX-License-Identifier: AGPL-3.0-or-later
export enum LOCALE_NAME {
  ENGLISH = "English",
}

export enum LOCALE_CODE {
  ENGLISH = "en",
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
];

export default locales;
