// SPDX-License-Identifier: AGPL-3.0-or-later
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import localesDefault, {
  LOCALE_CODE,
  LOCALE_NAME,
  locales,
} from "../../shared/utils/locales";

const LOCALES_DIR = resolve(__dirname, "../../Scribe-i18n/i18n/locales");

const findLocale = (code: string) => locales.find((l) => l.code === code);

describe("utils/locales", () => {
  // MARK: Exports

  describe("exports", () => {
    it("exports the locales list as the default export", () => {
      expect(localesDefault).toBe(locales);
    });

    it("defines one locale for every supported language", () => {
      expect(locales).toHaveLength(Object.keys(LOCALE_CODE).length);
    });

    it("defines a name for every locale code", () => {
      expect(Object.keys(LOCALE_NAME).sort()).toEqual(
        Object.keys(LOCALE_CODE).sort()
      );
    });
  });

  // MARK: Locale Lookup

  describe("locale code lookup", () => {
    it.each(Object.entries(LOCALE_CODE))(
      "has a single locale for %s",
      (_key, code) => {
        expect(locales.filter((l) => l.code === code)).toHaveLength(1);
      }
    );

    it.each([
      ["bn", "বাংলা", "bn.json"],
      ["en", "English", "en-US.json"],
      ["el", "Ελληνικά", "el.json"],
      ["hi", "हिन्दी", "hi.json"],
      ["kn", "ಕನ್ನಡ", "kn.json"],
      ["ml", "മലയാളം", "ml.json"],
      ["ne", "नेपाली", "ne.json"],
      ["ta", "தமிழ்", "ta.json"],
      ["te", "తెలుగు", "te.json"],
    ])("maps %s to its name and file", (code, name, file) => {
      expect(findLocale(code)).toMatchObject({ code, name, file });
    });

    it("returns undefined for a code that is not supported", () => {
      expect(findLocale("xx")).toBeUndefined();
      expect(findLocale("")).toBeUndefined();
    });
  });

  // MARK: Locale Names

  describe("locale names", () => {
    it("pairs each code with the name of the same language", () => {
      for (const [key, code] of Object.entries(LOCALE_CODE)) {
        expect(findLocale(code)?.name).toBe(
          LOCALE_NAME[key as keyof typeof LOCALE_NAME]
        );
      }
    });

    it("uses a unique, non-empty name for every locale", () => {
      const names = locales.map((l) => l.name);
      expect(names.every((name) => !!name && name.trim() === name)).toBe(true);
      expect(new Set(names).size).toBe(names.length);
    });
  });

  // MARK: Fallback Locale

  describe("fallback locale", () => {
    it("includes English, which is the default and fallback locale", () => {
      expect(LOCALE_CODE.ENGLISH).toBe("en");
      expect(findLocale(LOCALE_CODE.ENGLISH)).toMatchObject({
        name: LOCALE_NAME.ENGLISH,
        file: "en-US.json",
      });
    });
  });

  // MARK: Locale Files

  describe("locale files", () => {
    it("uses a unique json file for every locale", () => {
      const files = locales.map((l) => String(l.file));
      expect(files.every((file) => file.endsWith(".json"))).toBe(true);
      expect(new Set(files).size).toBe(files.length);
    });

    it.each(locales.map((l) => [l.code, String(l.file)]))(
      "has a translation file for %s",
      (_code, file) => {
        expect(existsSync(resolve(LOCALES_DIR, file as string))).toBe(true);
      }
    );
  });
});
