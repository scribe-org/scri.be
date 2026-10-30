// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import FooterWebsite from "../../../app/components/footer/FooterWebsite.vue";
import render from "../../render";

// Note: The footer renders its content twice, once for small and once for large screens.
const LAYOUTS = 2;

const getLinks = (name: string) => screen.getAllByRole("link", { name });

describe("FooterWebsite", () => {
  // MARK: Content

  describe("content", () => {
    it("renders a footer", async () => {
      const { container } = await render(FooterWebsite);

      expect(container.querySelector("footer")).not.toBeNull();
    });

    it("renders the tagline", async () => {
      await render(FooterWebsite);

      expect(
        screen.getAllByText("Open-source language solutions.")
      ).toHaveLength(LAYOUTS);
    });

    it("renders the license information", async () => {
      await render(FooterWebsite);

      expect(
        screen.getAllByText("License: AGPL-3.0; CC BY-SA 4.0.")
      ).toHaveLength(LAYOUTS);
    });

    it("renders the headings of the link sections", async () => {
      await render(FooterWebsite);

      for (const heading of ["Connect", "Resources", "Organization"]) {
        expect(screen.getAllByText(heading)).toHaveLength(LAYOUTS);
      }
    });
  });

  // MARK: Platform Links

  describe("platform links", () => {
    it("links to the releases and to the source code on GitHub", async () => {
      await render(FooterWebsite);

      for (const link of getLinks("v0.1.0")) {
        expect(link.getAttribute("href")).toBe(
          "https://github.com/scribe-org/scri.be/releases"
        );
        expect(link.getAttribute("target")).toBe("_blank");
      }
      for (const link of getLinks("Source Code")) {
        expect(link.getAttribute("href")).toBe("https://github.com/scribe-org");
        expect(link.getAttribute("target")).toBe("_blank");
      }
    });

    it("links to the roadmap project board", async () => {
      await render(FooterWebsite);

      const links = getLinks("Roadmap");
      expect(links).toHaveLength(LAYOUTS);
      for (const link of links) {
        expect(link.getAttribute("href")).toBe(
          "https://github.com/orgs/scribe-org/projects/1"
        );
      }
    });
  });

  // MARK: Connect Links

  describe("social and contact links", () => {
    it.each([
      ["team@scri.be", "mailto:team@scri.be"],
      ["GitHub", "https://github.com/scribe-org"],
      ["Matrix", "https://matrix.to/#/#scribe_community:matrix.org"],
      ["Mastodon", "https://wikis.world/@scribe"],
    ])("links %s to %s", async (name, href) => {
      await render(FooterWebsite);

      const links = getLinks(name);
      expect(links).toHaveLength(LAYOUTS);
      for (const link of links) {
        expect(link.getAttribute("href")).toBe(href);
        expect(link.getAttribute("target")).toBe("_blank");
      }
    });
  });

  // MARK: Internal Links

  describe("internal links", () => {
    it.each([
      ["Documentation", "/docs"],
      ["About Scribe", "/docs/about/community"],
      ["Supporters", "/docs/about/supporters-showcase"],
      ["Imprint", "/docs/about/imprint"],
      ["Trademark Policy", "/docs/legal/trademark-policy"],
      ["Privacy Policy", "/docs/legal/privacy-policy"],
    ])("links %s to %s", async (name, path) => {
      await render(FooterWebsite);

      const links = getLinks(name);
      expect(links).toHaveLength(LAYOUTS);
      for (const link of links) {
        expect(link.getAttribute("href")).toContain(path);
      }
    });
  });

  // MARK: Netlify

  describe("hosting notice", () => {
    it("links to Netlify", async () => {
      await render(FooterWebsite);

      const links = getLinks("This site is powered by Netlify.");
      expect(links).toHaveLength(LAYOUTS);
      for (const link of links) {
        expect(link.getAttribute("href")).toBe("https://www.netlify.com/");
        expect(link.getAttribute("target")).toBe("_blank");
      }
    });
  });
});
