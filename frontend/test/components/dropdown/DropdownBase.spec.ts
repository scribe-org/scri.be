// SPDX-License-Identifier: AGPL-3.0-or-later
import { fireEvent, screen, waitFor } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { h, reactive } from "vue";

import DropdownBase from "../../../app/components/dropdown/DropdownBase.vue";
import { DropdownLocation } from "../../../shared/types/location";
import render from "../../render";

const baseProps = {
  menuButtonAriaLabel: "test.dropdown.aria",
  menuButtonIcon: "bi:globe",
  menuButtonLabel: "test.dropdown.label",
};

const slots = {
  default: () => h("div", { "data-testid": "dropdown-item" }, "Item"),
};

const getTrigger = () => screen.getByRole("button");

describe("DropdownBase", () => {
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

  // MARK: Trigger

  describe("trigger button", () => {
    it("renders the label and the aria label", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      expect(getTrigger().getAttribute("aria-label")).toBe(
        "test.dropdown.aria"
      );
      expect(screen.getByText("test.dropdown.label")).toBeDefined();
    });

    it("renders the menu icon and a chevron", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      const icons = getTrigger().querySelectorAll(".iconify");
      expect(icons).toHaveLength(2);
    });

    it("applies the uppercase and bold classes only when requested", async () => {
      await render(DropdownBase, { props: baseProps, slots });
      const label = screen.getByText("test.dropdown.label");
      expect(label.classList.contains("uppercase")).toBe(false);
      expect(label.classList.contains("font-bold")).toBe(false);
    });

    it("applies the uppercase and bold classes when requested", async () => {
      await render(DropdownBase, {
        props: {
          ...baseProps,
          isMenuButtonUppercase: true,
          isMenuButtonBold: true,
        },
        slots,
      });

      const label = screen.getByText("test.dropdown.label");
      expect(label.classList.contains("uppercase")).toBe(true);
      expect(label.classList.contains("font-bold")).toBe(true);
    });
  });

  // MARK: Accessibility

  describe("accessibility attributes", () => {
    it("is collapsed and announces a popup menu by default", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      const trigger = getTrigger();
      expect(trigger.getAttribute("aria-haspopup")).toBe("menu");
      expect(trigger.getAttribute("aria-expanded")).toBe("false");
    });

    it("sets aria-expanded to true while the menu is open", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      await fireEvent.click(getTrigger());

      await waitFor(() =>
        expect(getTrigger().getAttribute("aria-expanded")).toBe("true")
      );
      expect(getTrigger().getAttribute("aria-haspopup")).toBe("menu");
    });
  });

  // MARK: Open and Close

  describe("opening and closing", () => {
    it("does not render the slot content while closed", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      expect(screen.queryByTestId("dropdown-item")).toBeNull();
      expect(screen.queryByRole("menu")).toBeNull();
    });

    it("renders the slot content inside the menu when opened", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      await fireEvent.click(getTrigger());

      const menu = await screen.findByRole("menu");
      expect(menu.contains(screen.getByTestId("dropdown-item"))).toBe(true);
    });

    it("closes the menu when the trigger is clicked again", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      await fireEvent.click(getTrigger());
      await screen.findByRole("menu");

      await fireEvent.click(getTrigger());

      await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
      expect(getTrigger().getAttribute("aria-expanded")).toBe("false");
    });

    it("closes the menu when Escape is pressed", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      await fireEvent.click(getTrigger());
      const menu = await screen.findByRole("menu");

      await fireEvent.keyDown(menu, { key: "Escape", code: "Escape" });

      await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
    });

    it("closes the menu when clicking outside of it", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      await fireEvent.click(getTrigger());
      await screen.findByRole("menu");

      await fireEvent.pointerDown(document.body);
      await fireEvent.mouseDown(document.body);
      await fireEvent.pointerUp(document.body);
      await fireEvent.mouseUp(document.body);
      await fireEvent.click(document.body);

      await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
    });

    it("rotates the chevron only while the menu is open", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      const chevron = () => getTrigger().querySelectorAll(".iconify")[1]!;
      expect(chevron().classList.contains("rotate-180")).toBe(false);

      await fireEvent.click(getTrigger());

      await waitFor(() =>
        expect(chevron().classList.contains("rotate-180")).toBe(true)
      );
    });
  });

  // MARK: Location

  describe("location", () => {
    it("shows the label and the chevron in the sidebar left menu when expanded", async () => {
      await render(DropdownBase, {
        props: { ...baseProps, location: DropdownLocation.SIDE_LEFT_MENU },
        slots,
      });

      expect(screen.getByText("test.dropdown.label")).toBeDefined();
      expect(getTrigger().querySelectorAll(".iconify")).toHaveLength(2);
    });

    it("hides the label and the chevron in the sidebar left menu when collapsed", async () => {
      sidebar.collapsed = true;
      sidebar.collapsedSwitch = true;

      await render(DropdownBase, {
        props: { ...baseProps, location: DropdownLocation.SIDE_LEFT_MENU },
        slots,
      });

      expect(screen.queryByText("test.dropdown.label")).toBeNull();
      expect(getTrigger().querySelectorAll(".iconify")).toHaveLength(1);
    });

    it("expands a collapsed sidebar when the trigger receives focus", async () => {
      sidebar.collapsed = true;

      await render(DropdownBase, {
        props: { ...baseProps, location: DropdownLocation.SIDE_LEFT_MENU },
        slots,
      });

      await fireEvent.focus(getTrigger());

      expect(sidebar.collapsed).toBe(false);
    });

    it("keeps an expanded sidebar expanded when the trigger receives focus", async () => {
      await render(DropdownBase, { props: baseProps, slots });

      await fireEvent.focus(getTrigger());

      expect(sidebar.collapsed).toBe(false);
    });
  });
});
