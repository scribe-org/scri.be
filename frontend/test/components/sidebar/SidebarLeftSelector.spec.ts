// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { reactive } from "vue";

import SidebarLeftSelector from "../../../app/components/sidebar/left/SidebarLeftSelector.vue";
import { createUseLocalePathMock } from "../../mocks/composableMocks";
import render from "../../render";

globalThis.useLocalePath = createUseLocalePathMock("");

describe("SidebarLeftSelector", () => {
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

  const baseProps = {
    iconUrl: "bi:card-text",
    label: "i18n._global.about",
    routeUrl: "/about",
    selected: false,
  };

  it("renders icon and visible label when expanded", async () => {
    const { container } = await render(SidebarLeftSelector, {
      props: baseProps,
    });

    const icon = container.querySelector(".size-5");
    expect(icon).not.toBeNull();

    const text = screen.getByText("i18n._global.about");
    expect(text).toBeDefined();
    expect(text.classList.contains("sr-only")).toBe(false);
  });

  it("renders accessible screen-reader label when collapsed", async () => {
    sidebar.collapsed = true;
    sidebar.collapsedSwitch = true;

    const { container } = await render(SidebarLeftSelector, {
      props: baseProps,
    });

    const visibleP = container.querySelector("p.whitespace-nowrap");
    expect(visibleP).toBeNull();

    const srOnly = container.querySelector("span.sr-only");
    expect(srOnly).not.toBeNull();
    expect(srOnly?.textContent).toContain("i18n._global.about");
  });

  it("passes routeUrl and selected state to link wrapper", async () => {
    const { container } = await render(SidebarLeftSelector, {
      props: { ...baseProps, selected: true },
    });

    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toBe("/about");
  });
});
