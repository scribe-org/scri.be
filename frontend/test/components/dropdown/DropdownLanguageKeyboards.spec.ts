// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { fireEvent, screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";

import DropdownLanguageKeyboards from "../../../app/components/dropdown/DropdownLanguageKeyboards.vue";
import render from "../../render";

const mockIsCurrentPath = vi.fn(
  (path: string) => path === "/docs/keyboard-apps"
);

mockNuxtImport("useCurrentPath", () => () => ({
  isCurrentPath: mockIsCurrentPath,
}));

describe("DropdownLanguageKeyboards", () => {
  const nuxtLinkStub = {
    template: '<a data-testid="keyboard-link" :to="to"><slot /></a>',
    props: ["to"],
  };

  it("renders trigger button with label and aria-label", async () => {
    await render(DropdownLanguageKeyboards, {
      global: {
        stubs: {
          NuxtLink: nuxtLinkStub,
        },
      },
    });

    const trigger = screen.getByRole("button", {
      name: /open the dropdown to select an option/i,
    });
    expect(trigger).toBeDefined();
    expect(trigger.textContent).toMatch(/keyboard apps/i);
  });

  it("renders all keyboard navigation links when opened", async () => {
    await render(DropdownLanguageKeyboards, {
      global: {
        stubs: {
          NuxtLink: nuxtLinkStub,
        },
      },
    });

    const trigger = screen.getByRole("button", {
      name: /open the dropdown to select an option/i,
    });
    await fireEvent.click(trigger);

    const links = screen.getAllByTestId("keyboard-link");
    expect(links).toHaveLength(4);

    const hrefs = links.map((l) => l.getAttribute("to"));
    expect(hrefs).toEqual([
      "/docs/keyboard-apps",
      "/docs/keyboard-apps/learn-more",
      "/docs/keyboard-apps/android-changelog",
      "/docs/keyboard-apps/ios-changelog",
    ]);

    expect(screen.getByText(/index/i)).toBeDefined();
    expect(screen.getByText(/learn more/i)).toBeDefined();
    expect(screen.getByText(/android changelog/i)).toBeDefined();
    expect(screen.getByText(/ios changelog/i)).toBeDefined();
  });
});
