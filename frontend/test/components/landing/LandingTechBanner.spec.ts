// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import LandingTechBanner from "../../../app/components/landing/LandingTechBanner.vue";
import render from "../../render";

describe("LandingTechBanner", () => {
  // MARK: Content

  describe("content", () => {
    it("renders the heading", async () => {
      await render(LandingTechBanner);

      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading.textContent?.trim()).toBe("Open");
    });

    it("renders the tagline and body copy", async () => {
      await render(LandingTechBanner);

      expect(screen.getByText("Our code and processes")).toBeDefined();
      expect(
        screen.getByText(/open data from Wikidata, so we're dedicated/)
      ).toBeDefined();
    });
  });

  // MARK: Community Shields

  describe("community shields", () => {
    it("renders the GitHub and Matrix shields with their destinations", async () => {
      const { container } = await render(LandingTechBanner);

      const hrefs = [...container.querySelectorAll("a")].map((link) =>
        link.getAttribute("href")
      );
      expect(hrefs).toEqual([
        "https://github.com/scribe-org",
        "https://matrix.to/#/#scribe_community:matrix.org",
      ]);
    });

    it("renders the shield labels", async () => {
      await render(LandingTechBanner);

      expect(screen.getByText("Visit us on")).toBeDefined();
      expect(screen.getByText("GitHub")).toBeDefined();
      expect(screen.getByText("Join us on")).toBeDefined();
      expect(screen.getByText("Matrix")).toBeDefined();
    });
  });
});
