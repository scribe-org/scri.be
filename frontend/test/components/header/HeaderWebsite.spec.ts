// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { cleanup, screen } from "@testing-library/vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";

import HeaderWebsite from "../../../app/components/header/HeaderWebsite.vue";
import render from "../../render";

const { useBreakpointMock } = vi.hoisted(() => ({
  useBreakpointMock: vi.fn(),
}));

mockNuxtImport("useBreakpoint", () => useBreakpointMock);

// Stubs that expose the props the header passes on to its children.
const BtnRouteInternal = defineComponent({
  props: ["ariaLabel", "label", "linkTo", "cta", "fontSize", "leftIcon"],
  render() {
    return h("a", {
      "aria-label": this.ariaLabel,
      "data-label": this.label,
      href: this.linkTo,
    });
  },
});

const DropdownTheme = defineComponent({
  props: ["location"],
  render() {
    return h("div", {
      "data-testid": "dropdown-theme",
      "data-location": this.location,
    });
  },
});

const DropdownLanguage = defineComponent({
  props: ["location"],
  render() {
    return h("div", {
      "data-testid": "dropdown-language",
      "data-location": this.location,
    });
  },
});

const SidebarRight = defineComponent({
  render() {
    return h(
      "div",
      { "data-testid": "sidebar-right" },
      this.$slots.default?.()
    );
  },
});

const renderHeader = async (aboveMediumBreakpoint: boolean) => {
  useBreakpointMock.mockReturnValue(ref(aboveMediumBreakpoint));

  return await render(HeaderWebsite, {
    global: {
      stubs: {
        BtnRouteInternal,
        DropdownTheme,
        DropdownLanguage,
        SidebarRight,
      },
    },
  });
};

const scrollTo = async (scrollY: number) => {
  Object.defineProperty(window, "scrollY", {
    value: scrollY,
    configurable: true,
  });
  window.dispatchEvent(new Event("scroll"));
  await nextTick();
};

describe("HeaderWebsite", () => {
  afterEach(() => {
    useBreakpointMock.mockReset();
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  });

  // MARK: Desktop

  describe("on a medium or larger screen", () => {
    it("renders the desktop header and not the mobile one", async () => {
      const { container } = await renderHeader(true);

      expect(container.querySelector("#desktop-header")).not.toBeNull();
      expect(container.querySelector("#mobile-header")).toBeNull();
      expect(screen.queryByTestId("sidebar-right")).toBeNull();
    });

    it("links to the documentation", async () => {
      await renderHeader(true);

      const link = screen.getByRole("link");
      expect(link.getAttribute("href")).toBe("/docs");
      expect(link.getAttribute("data-label")).toBe(
        "i18n.components._global.documentation"
      );
      expect(link.getAttribute("aria-label")).toBe(
        "i18n.components._global.view_docs_aria_label"
      );
    });

    it("renders the theme and language dropdowns without a side menu location", async () => {
      await renderHeader(true);

      for (const id of ["dropdown-theme", "dropdown-language"]) {
        const dropdown = screen.getByTestId(id);
        expect(dropdown.getAttribute("data-location")).toBeNull();
      }
    });
  });

  // MARK: Mobile

  describe("on a small screen", () => {
    it("renders the mobile header and not the desktop one", async () => {
      const { container } = await renderHeader(false);

      expect(container.querySelector("#mobile-header")).not.toBeNull();
      expect(container.querySelector("#desktop-header")).toBeNull();
    });

    it("puts the documentation link and dropdowns in the right sidebar", async () => {
      await renderHeader(false);

      const sidebar = screen.getByTestId("sidebar-right");
      expect(sidebar.querySelector("a")?.getAttribute("href")).toBe("/docs");
      expect(sidebar.contains(screen.getByTestId("dropdown-theme"))).toBe(true);
      expect(sidebar.contains(screen.getByTestId("dropdown-language"))).toBe(
        true
      );
    });

    it("renders the dropdowns for the side menu", async () => {
      await renderHeader(false);

      for (const id of ["dropdown-theme", "dropdown-language"]) {
        expect(screen.getByTestId(id).getAttribute("data-location")).toBe(
          "sideMenu"
        );
      }
    });
  });

  // MARK: Scrolling

  describe("scrolling", () => {
    const getHeader = (container: Element) =>
      container.querySelector("header")!;

    it("is fully visible at the top of the page", async () => {
      const { container } = await renderHeader(true);

      const classes = getHeader(container).classList;
      expect(classes.contains("bg-scribe-blue")).toBe(true);
      expect(classes.contains("opacity-0")).toBe(false);
    });

    it("hides when scrolling down", async () => {
      const { container } = await renderHeader(true);

      await scrollTo(200);

      const classes = getHeader(container).classList;
      expect(classes.contains("opacity-0")).toBe(true);
      expect(classes.contains("invisible")).toBe(true);
      expect(classes.contains("bg-scribe-blue")).toBe(false);
    });

    it("becomes translucent when scrolling back up", async () => {
      const { container } = await renderHeader(true);

      await scrollTo(200);
      await scrollTo(100);

      const classes = getHeader(container).classList;
      expect(classes.contains("bg-scribe-blue/80")).toBe(true);
      expect(classes.contains("drop-shadow-md")).toBe(true);
      expect(classes.contains("opacity-0")).toBe(false);
    });

    it("is fully visible again after scrolling back to the top", async () => {
      const { container } = await renderHeader(true);

      await scrollTo(200);
      await scrollTo(0);

      const classes = getHeader(container).classList;
      expect(classes.contains("bg-scribe-blue")).toBe(true);
      expect(classes.contains("opacity-0")).toBe(false);
    });

    it("stops listening for scroll events once it is unmounted", async () => {
      const removeEventListener = vi.spyOn(window, "removeEventListener");
      await renderHeader(true);

      cleanup();

      expect(removeEventListener).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function)
      );
      removeEventListener.mockRestore();
    });
  });
});
