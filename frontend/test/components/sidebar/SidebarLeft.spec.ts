// SPDX-License-Identifier: AGPL-3.0-or-later
import { fireEvent } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick, reactive } from "vue";

import SidebarLeft from "../../../app/components/sidebar/left/SidebarLeft.vue";
import render from "../../render";

describe("SidebarLeft", () => {
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

  const stubs = {
    SidebarLeftContent: {
      template: '<div data-testid="sidebar-left-content" />',
    },
    SidebarLeftHeader: {
      template: '<div data-testid="sidebar-left-header" />',
    },
  };

  it("renders aside element with role and attributes", async () => {
    const { container } = await render(SidebarLeft, {
      global: { stubs },
    });

    const aside = container.querySelector("aside#sidebar-left");
    expect(aside).not.toBeNull();
    expect(aside?.getAttribute("role")).toBe("menu");
    expect(aside?.getAttribute("tabindex")).toBe("0");
  });

  it("applies width classes depending on collapsed store state", async () => {
    const { container } = await render(SidebarLeft, {
      global: { stubs },
    });

    const aside = container.querySelector("aside#sidebar-left");
    expect(aside?.classList.contains("w-56")).toBe(true);
    expect(aside?.classList.contains("w-16")).toBe(false);

    sidebar.collapsed = true;
    sidebar.collapsedSwitch = true;
    await nextTick();

    expect(aside?.classList.contains("w-16")).toBe(true);
    expect(aside?.classList.contains("w-56")).toBe(false);
  });

  it("expands on mouseover and collapses on mouseleave", async () => {
    sidebar.collapsed = true;
    sidebar.collapsedSwitch = false;

    const { container } = await render(SidebarLeft, {
      global: { stubs },
    });

    const aside = container.querySelector("aside#sidebar-left")!;
    await fireEvent.mouseOver(aside);
    expect(sidebar.collapsed).toBe(false);

    await fireEvent.mouseLeave(aside);
    expect(sidebar.collapsed).toBe(true);
  });

  it("expands on focus and handles focusout based on relatedTarget", async () => {
    sidebar.collapsed = true;
    sidebar.collapsedSwitch = false;

    const { container } = await render(SidebarLeft, {
      global: { stubs },
    });

    const aside = container.querySelector("aside#sidebar-left")!;
    await fireEvent.focus(aside);
    expect(sidebar.collapsed).toBe(false);

    // Focusout with relatedTarget inside aside stays expanded.
    await fireEvent.focusOut(aside, { relatedTarget: aside });
    expect(sidebar.collapsed).toBe(false);

    // Focusout with relatedTarget outside aside collapses.
    await fireEvent.focusOut(aside, { relatedTarget: null });
    expect(sidebar.collapsed).toBe(true);
  });

  it("toggles content overflow-y-auto based on collapsed state", async () => {
    const { container } = await render(SidebarLeft, {
      global: { stubs },
    });

    const contentDiv = container.querySelector(".overflow-x-hidden");
    expect(contentDiv).not.toBeNull();
    expect(contentDiv?.classList.contains("overflow-y-auto")).toBe(true);

    sidebar.collapsed = true;
    sidebar.collapsedSwitch = true;
    await nextTick();

    expect(contentDiv?.classList.contains("overflow-y-auto")).toBe(false);
  });
});
