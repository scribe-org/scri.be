// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { fireEvent, screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";

import SidebarRight from "../../../app/components/sidebar/right/SidebarRight.vue";
import render from "../../render";

const { mockRoute } = await vi.hoisted(async () => {
  const { reactive } = await import("vue");
  return {
    mockRoute: reactive({ path: "/" }),
  };
});

mockNuxtImport("useRoute", () => () => mockRoute);

describe("SidebarRight", () => {
  beforeEach(() => {
    mockRoute.path = "/";
  });

  const stubs = {
    SidebarRightHamburger: {
      template:
        '<button data-testid="hamburger-btn" @click="$emit(\'toggle\')" />',
      emits: ["toggle"],
    },
  };

  it("drawer is closed initially and opens on hamburger toggle", async () => {
    const { container } = await render(SidebarRight, {
      global: { stubs },
    });

    const drawer = container.querySelector("#drawer-navigation");
    expect(drawer).not.toBeNull();
    expect(drawer?.classList.contains("max-w-0")).toBe(true);

    const hamburgerBtn = screen.getByTestId("hamburger-btn");
    await fireEvent.click(hamburgerBtn);

    expect(drawer?.classList.contains("max-w-[16rem]")).toBe(true);
    expect(drawer?.classList.contains("border-l")).toBe(true);

    await fireEvent.click(hamburgerBtn);
    expect(drawer?.classList.contains("max-w-0")).toBe(true);
  });

  it("renders slot content inside the drawer", async () => {
    await render(SidebarRight, {
      global: { stubs },
      slots: {
        default: '<div data-testid="drawer-slot-content">Drawer items</div>',
      },
    });

    expect(screen.getByTestId("drawer-slot-content")).toBeDefined();
  });

  it("closes the drawer when route changes", async () => {
    const { container } = await render(SidebarRight, {
      global: { stubs },
    });

    const drawer = container.querySelector("#drawer-navigation");
    const hamburgerBtn = screen.getByTestId("hamburger-btn");

    await fireEvent.click(hamburgerBtn);
    expect(drawer?.classList.contains("max-w-[16rem]")).toBe(true);

    mockRoute.path = "/new-page";
    await nextTick();

    expect(drawer?.classList.contains("max-w-0")).toBe(true);
  });
});
