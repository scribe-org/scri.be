// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { h } from "vue";

import MenuLinkWrapper from "../../../app/components/menu/MenuLinkWrapper.vue";
import render from "../../render";

const slots = { default: () => h("span", "Link content") };

const getLink = () => screen.getByRole("link");

describe("MenuLinkWrapper", () => {
  // MARK: Rendering

  describe("rendering", () => {
    it("renders the slot content inside a link", async () => {
      await render(MenuLinkWrapper, {
        props: { to: "/docs", selected: false },
        slots,
      });

      expect(getLink().textContent).toContain("Link content");
    });

    it("links to the given path", async () => {
      await render(MenuLinkWrapper, {
        props: { to: "/docs/about/community", selected: false },
        slots,
      });

      expect(getLink().getAttribute("href")).toContain("/docs/about/community");
    });
  });

  // MARK: Selected State

  describe("selected state", () => {
    it("uses the call to action style when selected", async () => {
      await render(MenuLinkWrapper, {
        props: { to: "/docs", selected: true },
        slots,
      });

      const classes = getLink().classList;
      expect(classes.contains("style-menu-option-cta")).toBe(true);
      expect(classes.contains("style-menu-option")).toBe(false);
    });

    it("uses the regular option style when not selected", async () => {
      await render(MenuLinkWrapper, {
        props: { to: "/docs", selected: false },
        slots,
      });

      const classes = getLink().classList;
      expect(classes.contains("style-menu-option")).toBe(true);
      expect(classes.contains("style-menu-option-cta")).toBe(false);
    });
  });

  // MARK: Extra Styles

  describe("isAddStyles", () => {
    it("adds the option style and padding by default", async () => {
      await render(MenuLinkWrapper, {
        props: { to: "/docs", selected: false },
        slots,
      });

      expect(getLink().classList.contains("p-2")).toBe(true);
    });

    it("leaves out the option style and padding when set to false", async () => {
      await render(MenuLinkWrapper, {
        props: { to: "/docs", selected: false, isAddStyles: false },
        slots,
      });

      const classes = getLink().classList;
      expect(classes.contains("p-2")).toBe(false);
      expect(classes.contains("style-menu-option")).toBe(false);
    });

    it("still uses the call to action style when set to false and selected", async () => {
      await render(MenuLinkWrapper, {
        props: { to: "/docs", selected: true, isAddStyles: false },
        slots,
      });

      const classes = getLink().classList;
      expect(classes.contains("style-menu-option-cta")).toBe(true);
      expect(classes.contains("p-2")).toBe(false);
    });
  });
});
