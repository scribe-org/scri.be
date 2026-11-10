// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import CardDocsEntry from "../../../app/components/card/CardDocsEntry.vue";
import render from "../../render";

mockNuxtImport("useLocalePath", () => () => (path: string) => `/en${path}`);

describe("CardDocsEntry", () => {
  const baseProps = {
    url: "/docs/keyboard-apps/learn-more",
    iconURL: "bi:info-circle",
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.information_icon_img_alt_text",
    title: "i18n._global.learn_more",
    description: "i18n._global.android_changelog",
  };

  // MARK: Content

  describe("content", () => {
    it("renders the translated title and description", async () => {
      await render(CardDocsEntry, { props: baseProps });

      const title = screen.getByText("Learn More");
      expect(title.classList.contains("font-bold")).toBe(true);
      expect(screen.getByText("Android Changelog")).toBeDefined();
    });

    it("falls back to the raw key when a translation is missing", async () => {
      await render(CardDocsEntry, {
        props: { ...baseProps, title: "i18n._global.not_a_real_key" },
      });

      expect(screen.getByText("i18n._global.not_a_real_key")).toBeDefined();
      expect(screen.queryByText("Learn More")).toBeNull();
    });

    it("updates the text when the props change", async () => {
      const { rerender } = await render(CardDocsEntry, { props: baseProps });

      await rerender({ ...baseProps, title: "i18n._global.android_changelog" });

      expect(screen.getAllByText("Android Changelog")).toHaveLength(2);
      expect(screen.queryByText("Learn More")).toBeNull();
    });
  });

  // MARK: Link

  describe("link", () => {
    it("renders a single link to the localized url", async () => {
      const { container } = await render(CardDocsEntry, { props: baseProps });

      const links = container.querySelectorAll("a");
      expect(links).toHaveLength(1);
      expect(links[0]?.getAttribute("href")).toBe(
        "/en/docs/keyboard-apps/learn-more"
      );
    });

    it("contains the title and description inside the link", async () => {
      const { container } = await render(CardDocsEntry, { props: baseProps });

      const link = container.querySelector("a");
      expect(link?.textContent).toContain("Learn More");
      expect(link?.textContent).toContain("Android Changelog");
    });

    it("renders the card styling on the link", async () => {
      const { container } = await render(CardDocsEntry, { props: baseProps });

      const link = container.querySelector("a");
      expect(link?.classList.contains("card-style")).toBe(true);
      expect(link?.classList.contains("group")).toBe(true);
    });
  });

  // MARK: Icon

  describe("icon", () => {
    it("renders the icon inside the brand colored circle", async () => {
      const { container } = await render(CardDocsEntry, { props: baseProps });

      const circle = container.querySelector(".bg-scribe-blue");
      expect(circle).not.toBeNull();
      expect(circle?.classList.contains("rounded-full")).toBe(true);
      expect(circle?.children.length).toBeGreaterThan(0);
    });
  });
});
