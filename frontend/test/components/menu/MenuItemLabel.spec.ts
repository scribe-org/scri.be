// SPDX-License-Identifier: AGPL-3.0-or-later
import { fireEvent, screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { reactive } from "vue";

import MenuItemLabel from "../../../app/components/menu/MenuItemLabel.vue";
import render from "../../render";

const baseProps = {
  isButton: false,
  label: "test.menu.label",
  active: false,
};

describe("MenuItemLabel", () => {
  let sidebar: ReturnType<typeof globalThis.useSidebar>;

  beforeEach(() => {
    sidebar = reactive({
      collapsed: false,
      collapsedSwitch: false,
      toggleCollapsed: vi.fn(),
      toggleCollapsedSwitch: vi.fn(),
    });
    globalThis.useSidebarMock.mockReturnValue(sidebar);
  });

  // MARK: Item Type

  describe("item type", () => {
    it("renders a list item when it is not a button", async () => {
      const { container } = await render(MenuItemLabel, { props: baseProps });

      expect(container.querySelector("li")).not.toBeNull();
      expect(screen.queryByRole("button")).toBeNull();
    });

    it("renders a button when isButton is set", async () => {
      const { container } = await render(MenuItemLabel, {
        props: { ...baseProps, isButton: true },
      });

      expect(screen.getByRole("button")).toBeDefined();
      expect(container.querySelector("li")).toBeNull();
    });

    it("calls handlerClick when the button is clicked", async () => {
      const handlerClick = vi.fn();
      await render(MenuItemLabel, {
        props: { ...baseProps, isButton: true, handlerClick },
      });

      await fireEvent.click(screen.getByRole("button"));

      expect(handlerClick).toHaveBeenCalledTimes(1);
    });

    it("sets the aria label of the button", async () => {
      await render(MenuItemLabel, {
        props: {
          ...baseProps,
          isButton: true,
          ariaLabel: "test.menu.aria",
        },
      });

      expect(screen.getByRole("button").getAttribute("aria-label")).toBe(
        "test.menu.aria"
      );
    });
  });

  // MARK: Label and Icon

  describe("label and icon", () => {
    it("renders the label", async () => {
      await render(MenuItemLabel, { props: baseProps });

      expect(screen.getByText("test.menu.label")).toBeDefined();
    });

    it("renders the label as a paragraph for a button", async () => {
      await render(MenuItemLabel, {
        props: { ...baseProps, isButton: true },
      });

      expect(screen.getByText("test.menu.label").tagName).toBe("P");
    });

    it("renders the label as a span without an icon", async () => {
      await render(MenuItemLabel, { props: baseProps });

      expect(screen.getByText("test.menu.label").tagName).toBe("SPAN");
    });

    it("renders the label as a paragraph with an icon", async () => {
      await render(MenuItemLabel, {
        props: { ...baseProps, iconName: "bi:globe" },
      });

      expect(screen.getByText("test.menu.label").tagName).toBe("P");
    });

    it("renders an icon only when iconName is given", async () => {
      const { container, rerender } = await render(MenuItemLabel, {
        props: baseProps,
      });
      expect(container.querySelector(".iconify")).toBeNull();

      await rerender({ iconName: "bi:globe" });

      expect(container.querySelector(".iconify")).not.toBeNull();
    });
  });

  // MARK: Active State

  describe("active state", () => {
    it("uses the primary text color when not active", async () => {
      const { container } = await render(MenuItemLabel, { props: baseProps });

      const item = container.querySelector("li")!;
      expect(item.classList.contains("text-primary-text")).toBe(true);
      expect(item.classList.contains("bg-scribe-blue-lighter")).toBe(false);
    });

    it("highlights the item when active", async () => {
      const { container } = await render(MenuItemLabel, {
        props: { ...baseProps, active: true },
      });

      const item = container.querySelector("li")!;
      expect(item.classList.contains("bg-scribe-blue-lighter")).toBe(true);
      expect(item.classList.contains("text-primary-text")).toBe(false);
    });
  });

  // MARK: Sidebar Left Menu

  describe("sidebar left menu", () => {
    const sidebarProps = { ...baseProps, isSidebarLeftMenu: true };

    it("uses the sidebar styles", async () => {
      const { container } = await render(MenuItemLabel, {
        props: sidebarProps,
      });

      const item = container.querySelector("li")!;
      expect(item.classList.contains("font-medium")).toBe(true);
      expect(item.classList.contains("pl-4")).toBe(false);
    });

    it("keeps the label while the sidebar is expanded", async () => {
      await render(MenuItemLabel, { props: sidebarProps });

      expect(screen.getByText("test.menu.label")).toBeDefined();
    });

    it("hides the label while the sidebar is collapsed", async () => {
      sidebar.collapsed = true;
      sidebar.collapsedSwitch = true;

      await render(MenuItemLabel, { props: sidebarProps });

      expect(screen.queryByText("test.menu.label")).toBeNull();
    });

    it("keeps the label when the sidebar is only partly collapsed", async () => {
      sidebar.collapsed = true;
      sidebar.collapsedSwitch = false;

      await render(MenuItemLabel, { props: sidebarProps });

      expect(screen.getByText("test.menu.label")).toBeDefined();
    });

    it("keeps the label outside of the sidebar even if it is collapsed", async () => {
      sidebar.collapsed = true;
      sidebar.collapsedSwitch = true;

      await render(MenuItemLabel, { props: baseProps });

      expect(screen.getByText("test.menu.label")).toBeDefined();
    });
  });
});
