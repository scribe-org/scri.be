// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { afterEach, describe, expect, it } from "vitest";
import { ref } from "vue";

import PageBreadcrumbs from "../../../app/components/page/PageBreadcrumbs.vue";
import render from "../../render";

// Locales may be configured as objects or as plain codes.
mockNuxtImport("useI18n", () => () => ({
  locales: ref([{ code: "en" }, { code: "de" }, "fr"]),
  t: (k: string) => globalThis.useI18n().t(k),
}));
mockNuxtImport("useLocalePath", () => () => (path: string) => `/en${path}`);

const renderAt = async (path: string) => {
  window.history.pushState({}, "", path);

  return await render(PageBreadcrumbs);
};

const breadcrumbLinks = () =>
  screen
    .getAllByRole("link")
    .filter((link) => link.textContent?.trim() !== "<");

describe("PageBreadcrumbs", () => {
  afterEach(() => {
    window.history.pushState({}, "", "/");
  });

  // MARK: Navigation

  it("renders an accessible navigation landmark", async () => {
    await renderAt("/en/docs/about");

    expect(
      screen.getByRole("navigation", {
        name: "The file path for the current page to allow the user to navigate back",
      })
    ).toBeDefined();
  });

  it("renders a single localized home link before the first breadcrumb", async () => {
    await renderAt("/en/docs/about/supporters");

    const links = screen.getAllByRole("link");
    const homeLinks = links.filter((link) => link.textContent?.trim() === "<");
    expect(homeLinks).toHaveLength(1);
    expect(links[0]).toBe(homeLinks[0]);
    expect(homeLinks[0]?.getAttribute("href")).toBe("/en/");
  });

  it("renders separators between breadcrumbs", async () => {
    const { container } = await renderAt("/en/docs/about/supporters");

    const items = container.querySelectorAll("li");
    expect(items).toHaveLength(3);

    const separators = Array.from(container.querySelectorAll("li > span"))
      .map((span) => span.textContent?.trim())
      .filter((text) => text === "|");
    expect(separators).toHaveLength(2);
  });

  // MARK: Route Parsing

  it("parses the route path into one breadcrumb per segment", async () => {
    await renderAt("/docs/about/supporters");

    expect(breadcrumbLinks().map((link) => link.textContent?.trim())).toEqual([
      "Docs",
      "About",
      "Supporters",
    ]);
  });

  it("ignores empty segments from repeated and trailing slashes", async () => {
    await renderAt("/docs//about/");

    expect(breadcrumbLinks().map((link) => link.textContent?.trim())).toEqual([
      "Docs",
      "About",
    ]);
  });

  it.each(["en", "de", "fr"])(
    "hides the %s locale segment from the breadcrumbs",
    async (locale) => {
      await renderAt(`/${locale}/docs/about`);

      expect(breadcrumbLinks().map((link) => link.textContent?.trim())).toEqual(
        ["Docs", "About"]
      );
    }
  );

  it("renders no breadcrumbs on the root path", async () => {
    const { container } = await renderAt("/");

    expect(container.querySelectorAll("li")).toHaveLength(0);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  // MARK: Links

  it("links each breadcrumb to the path up to and including its segment", async () => {
    await renderAt("/docs/keyboard-apps/learn-more");

    expect(breadcrumbLinks().map((link) => link.getAttribute("href"))).toEqual([
      "/docs",
      "/docs/keyboard-apps",
      "/docs/keyboard-apps/learn-more",
    ]);
  });

  it("keeps the locale prefix in breadcrumb links", async () => {
    await renderAt("/de/docs/about");

    expect(breadcrumbLinks().map((link) => link.getAttribute("href"))).toEqual([
      "/de/docs",
      "/de/docs/about",
    ]);
  });

  it("marks only the last breadcrumb as the current page", async () => {
    await renderAt("/en/docs/about/supporters");

    const links = breadcrumbLinks();
    const current = links.filter(
      (link) => link.getAttribute("aria-current") === "page"
    );
    expect(current).toHaveLength(1);
    expect(current[0]).toBe(links[links.length - 1]);
    expect(current[0]?.textContent?.trim()).toBe("Supporters");
  });

  // MARK: Labels

  it.each([
    ["about", "About"],
    ["keyboard-apps", "Keyboard Apps"],
    ["ios-changelog", "iOS Changelog"],
  ])("formats the %s segment as %s", async (segment, label) => {
    await renderAt(`/en/${segment}`);

    expect(breadcrumbLinks()[0]?.textContent?.trim()).toBe(label);
  });
});
