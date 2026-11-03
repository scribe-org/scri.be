// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick, reactive } from "vue";

import SidebarLeftContent from "../../../app/components/sidebar/left/SidebarLeftContent.vue";
import render from "../../render";

const { mockRoute } = await vi.hoisted(async () => {
  const { reactive } = await import("vue");
  return {
    mockRoute: reactive({ path: "/docs" }),
  };
});

mockNuxtImport("useRoute", () => () => mockRoute);

describe("SidebarLeftContent", () => {
  let sidebar: ReturnType<typeof globalThis.useSidebar>;

  beforeEach(() => {
    mockRoute.path = "/docs";

    sidebar = reactive({
      collapsed: false,
      collapsedSwitch: false,
      toggleCollapsed: vi.fn(),
      toggleCollapsedSwitch: vi.fn(),
    });
    globalThis.useSidebarMock.mockReturnValue(sidebar);
  });

  const stubs = {
    BtnRouteInternal: {
      template:
        '<button data-testid="btn-route-internal" :data-label="label" v-bind="$attrs" />',
      props: ["label", "linkTo"],
    },
    DropdownAbout: {
      template: '<div data-testid="dropdown-about" v-bind="$attrs" />',
    },
    DropdownConjugate: {
      template: '<div data-testid="dropdown-conjugate" v-bind="$attrs" />',
    },
    DropdownData: {
      template: '<div data-testid="dropdown-data" v-bind="$attrs" />',
    },
    DropdownLanguageKeyboards: {
      template: '<div data-testid="dropdown-keyboards" v-bind="$attrs" />',
    },
    DropdownLegal: {
      template: '<div data-testid="dropdown-legal" v-bind="$attrs" />',
    },
    DropdownServer: {
      template: '<div data-testid="dropdown-server" v-bind="$attrs" />',
    },
  };

  it("renders documentation link and all 6 resource dropdowns", async () => {
    const { container } = await render(SidebarLeftContent, {
      global: { stubs },
    });

    expect(
      container.querySelector('[data-testid="btn-route-internal"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="dropdown-keyboards"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="dropdown-conjugate"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="dropdown-data"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="dropdown-server"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="dropdown-about"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="dropdown-legal"]')
    ).not.toBeNull();
  });

  it("toggles documentation label between expanded and collapsed states", async () => {
    const { container } = await render(SidebarLeftContent, {
      global: { stubs },
    });

    const docsBtn = container.querySelector(
      '[data-testid="btn-route-internal"]'
    );
    expect(docsBtn?.getAttribute("data-label")).toBe(
      "i18n.components._global.documentation"
    );

    sidebar.collapsed = true;
    sidebar.collapsedSwitch = true;
    await nextTick();

    expect(docsBtn?.getAttribute("data-label")).toBe("");
  });

  it("applies active highlight styling when current route matches", async () => {
    mockRoute.path = "/docs";

    const { container } = await render(SidebarLeftContent, {
      global: { stubs },
    });

    const docsBtn = container.querySelector(
      '[data-testid="btn-route-internal"]'
    );
    expect(docsBtn?.classList.contains("bg-highlight")).toBe(true);

    mockRoute.path = "/about";
    await nextTick();

    expect(docsBtn?.classList.contains("bg-layer-0")).toBe(true);
  });
});
