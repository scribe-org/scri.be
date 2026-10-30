// SPDX-License-Identifier: AGPL-3.0-or-later
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import * as registry from "../../shared/utils/imageURLRegistry.s";
import {
  CONJUGATE_IMAGE_URL,
  DATA_IMAGE_URL,
  LANGUAGE_KEYBOARDS_IMAGE_URL,
  SCRIBE_COMMUNITY_IMAGE_URL,
  SCRIBE_LOGO_NO_SHADOW_URL,
  SCRIBE_LOGO_URL,
  SERVER_IMAGE_URL,
} from "../../shared/utils/imageURLRegistry.s";

const PUBLIC_DIR = resolve(__dirname, "../../public");

const inPublic = (url: string) => existsSync(resolve(PUBLIC_DIR, `.${url}`));

const logoUrls = [SCRIBE_LOGO_URL, SCRIBE_LOGO_NO_SHADOW_URL];

// The landing page URLs have no extension and get a color mode suffix added.
const landingUrls = [
  LANGUAGE_KEYBOARDS_IMAGE_URL,
  CONJUGATE_IMAGE_URL,
  DATA_IMAGE_URL,
  SERVER_IMAGE_URL,
  SCRIBE_COMMUNITY_IMAGE_URL,
];

describe("utils/imageURLRegistry", () => {
  // MARK: URL Mapping

  describe("url mapping", () => {
    it.each([
      ["SCRIBE_LOGO_URL", SCRIBE_LOGO_URL, "/images/scribe/scribe_logo.svg"],
      [
        "SCRIBE_LOGO_NO_SHADOW_URL",
        SCRIBE_LOGO_NO_SHADOW_URL,
        "/images/scribe/scribe_logo_no_shadow.svg",
      ],
      [
        "LANGUAGE_KEYBOARDS_IMAGE_URL",
        LANGUAGE_KEYBOARDS_IMAGE_URL,
        "/images/landing/language_keyboards",
      ],
      ["CONJUGATE_IMAGE_URL", CONJUGATE_IMAGE_URL, "/images/landing/conjugate"],
      ["DATA_IMAGE_URL", DATA_IMAGE_URL, "/images/landing/data"],
      ["SERVER_IMAGE_URL", SERVER_IMAGE_URL, "/images/landing/server"],
      [
        "SCRIBE_COMMUNITY_IMAGE_URL",
        SCRIBE_COMMUNITY_IMAGE_URL,
        "/images/landing/scribe_community",
      ],
    ])("maps %s to %s", (_name, actual, expected) => {
      expect(actual).toBe(expected);
    });

    it("only exports string urls", () => {
      const values = Object.values(registry);
      expect(values.length).toBeGreaterThan(0);
      expect(values.every((value) => typeof value === "string")).toBe(true);
    });
  });

  // MARK: URL Format

  describe("url format", () => {
    it("uses absolute paths without whitespace or query strings", () => {
      for (const url of Object.values(registry)) {
        expect(url.startsWith("/")).toBe(true);
        expect(url).not.toMatch(/\s|\?|#/);
      }
    });

    it("has a unique url for every image", () => {
      const urls = Object.values(registry);
      expect(new Set(urls).size).toBe(urls.length);
    });

    it("uses svg files for the logos", () => {
      for (const url of logoUrls) {
        expect(url.endsWith(".svg")).toBe(true);
      }
    });

    it("leaves out the extension and color mode of the landing images", () => {
      for (const url of landingUrls) {
        expect(url).not.toMatch(/\.[a-z]+$/);
        expect(url).not.toMatch(/_(light|dark)$/);
      }
    });
  });

  // MARK: Image Files

  describe("image files", () => {
    it.each(logoUrls)("has a file in public for %s", (url) => {
      expect(inPublic(url)).toBe(true);
    });

    it.each(landingUrls)(
      "has a light and a dark image in public for %s",
      (url) => {
        expect(inPublic(`${url}_light.png`)).toBe(true);
        expect(inPublic(`${url}_dark.png`)).toBe(true);
      }
    );
  });
});
