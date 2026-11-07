// SPDX-License-Identifier: AGPL-3.0-or-later
import { fireEvent } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick, reactive } from "vue";

import SidebarLeftHeader from "../../../app/components/sidebar/left/SidebarLeftHeader.vue";
import render from "../../render";

describe("SidebarLeftHeader", () => {
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
    IconScribeSidebar: {
      template: '<div data-testid="icon-scribe-sidebar" v-bind="$attrs" />',
    },
    LogoScribe: { template: '<div data-testid="logo-scribe" />' },
    SidebarLeftToggle: {
      template: '<div data-testid="sidebar-left-toggle-icon" />',
    },
  };

  it("applies shadow styling when atTopShadow is true", async () => {
    const { container, rerender } = await render(SidebarLeftHeader, {
      global: { stubs },
      props: { atTopShadow: true },
    });

    const header = container.querySelector("header");
    expect(header?.classList.contains("elem-shadow-sm")).toBe(true);

    await rerender({ atTopShadow: false });
    expect(header?.classList.contains("elem-shadow-sm")).toBe(false);
  });

  it("shows LogoScribe when expanded and IconScribeSidebar when collapsed", async () => {
    const { container } = await render(SidebarLeftHeader, {
      global: { stubs },
      props: { atTopShadow: false },
    });

    expect(
      container.querySelector('[data-testid="logo-scribe"]')
    ).not.toBeNull();
    const icon = container.querySelector('[data-testid="icon-scribe-sidebar"]');
    expect(icon?.classList.contains("hidden")).toBe(true);

    sidebar.collapsed = true;
    sidebar.collapsedSwitch = true;
    await nextTick();

    expect(container.querySelector('[data-testid="logo-scribe"]')).toBeNull();
    expect(icon?.classList.contains("hidden")).toBe(false);
  });

  it("triggers toggleCollapsedSwitch and emits toggle-pressed on button click", async () => {
    const { container, emitted } = await render(SidebarLeftHeader, {
      global: { stubs },
      props: { atTopShadow: false },
    });

    const button = container.querySelector("button#sidebar-left-toggle")!;
    expect(button).not.toBeNull();
    expect(button.getAttribute("aria-label")).toBeTruthy();

    await fireEvent.click(button);

    expect(sidebar.toggleCollapsedSwitch).toHaveBeenCalledTimes(1);
    expect(emitted()["toggle-pressed"]).toHaveLength(1);
  });
});
