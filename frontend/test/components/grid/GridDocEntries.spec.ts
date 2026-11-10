// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it } from "vitest";

import GridDocEntries from "../../../app/components/grid/GridDocEntries.vue";
import render from "../../render";

const mockRoute = { path: "/docs/keyboard-apps" };

mockNuxtImport("useRoute", () => () => mockRoute);
mockNuxtImport("useLocalePath", () => () => (path: string) => `/en${path}`);

const cards = [
  {
    id: 0,
    url: "learn-more",
    title: "i18n._global.learn_more",
    description: "i18n._global.android_changelog",
    iconURL: "bi:info-circle",
    iconSize: "3em",
    imgAltText: "alt-0",
  },
  {
    id: 1,
    url: "android-changelog",
    title: "i18n._global.android_changelog",
    description: "i18n._global.learn_more",
    iconURL: "bi:file-code",
    iconSize: "3em",
    imgAltText: "alt-1",
  },
  {
    id: 2,
    url: "ios-changelog",
    title: "i18n._global.ios_changelog",
    description: "i18n._global.learn_more",
    iconURL: "bi:file-code",
    iconSize: "3em",
    imgAltText: "alt-2",
  },
];

describe("GridDocEntries", () => {
  beforeEach(() => {
    mockRoute.path = "/docs/keyboard-apps";
  });

  // MARK: Children

  describe("children", () => {
    it("renders one card link per entry in order", async () => {
      const { container } = await render(GridDocEntries, { props: { cards } });

      const links = container.querySelectorAll("a");
      expect(links).toHaveLength(3);
      expect(links[0]?.textContent).toContain("Learn More");
      expect(links[1]?.textContent).toContain("Android Changelog");
      expect(links[2]?.textContent).toContain("iOS Changelog");
    });

    it("passes the title and description of each entry to its card", async () => {
      await render(GridDocEntries, { props: { cards: [cards[0]!] } });

      expect(screen.getByText("Learn More")).toBeDefined();
      expect(screen.getByText("Android Changelog")).toBeDefined();
    });

    it("renders a single card when there is one entry", async () => {
      const { container } = await render(GridDocEntries, {
        props: { cards: [cards[1]!] },
      });

      expect(container.querySelectorAll("a")).toHaveLength(1);
    });
  });

  // MARK: Links

  describe("links", () => {
    it("appends each entry url to the current route path", async () => {
      const { container } = await render(GridDocEntries, { props: { cards } });

      const hrefs = [...container.querySelectorAll("a")].map((link) =>
        link.getAttribute("href")
      );
      expect(hrefs).toEqual([
        "/en/docs/keyboard-apps/learn-more",
        "/en/docs/keyboard-apps/android-changelog",
        "/en/docs/keyboard-apps/ios-changelog",
      ]);
    });

    it("does not double the slash when the route path ends with one", async () => {
      mockRoute.path = "/docs/keyboard-apps/";

      const { container } = await render(GridDocEntries, {
        props: { cards: [cards[0]!] },
      });

      expect(container.querySelector("a")?.getAttribute("href")).toBe(
        "/en/docs/keyboard-apps/learn-more"
      );
    });
  });

  // MARK: Empty

  describe("empty list", () => {
    it("renders the grid with no cards for an empty list", async () => {
      const { container } = await render(GridDocEntries, {
        props: { cards: [] },
      });

      expect(container.querySelector(".grid")).not.toBeNull();
      expect(container.querySelectorAll("a")).toHaveLength(0);
    });

    it("renders the grid with no cards when cards are not provided", async () => {
      const { container } = await render(GridDocEntries);

      expect(container.querySelector(".grid")).not.toBeNull();
      expect(container.querySelectorAll("a")).toHaveLength(0);
    });
  });

  // MARK: Layout

  describe("layout", () => {
    it("uses a one column grid that grows to two columns", async () => {
      const { container } = await render(GridDocEntries, { props: { cards } });

      const grid = container.querySelector(".grid");
      expect(grid?.classList.contains("grid-cols-1")).toBe(true);
      expect(grid?.classList.contains("md:grid-cols-2")).toBe(true);
    });
  });
});
