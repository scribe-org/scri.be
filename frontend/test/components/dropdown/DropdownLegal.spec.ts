// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { fireEvent, screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";

import DropdownLegal from "../../../app/components/dropdown/DropdownLegal.vue";
import render from "../../render";

const mockIsCurrentPath = vi.fn((path: string) => path === "/docs/legal");

mockNuxtImport("useCurrentPath", () => () => ({
  isCurrentPath: mockIsCurrentPath,
}));

describe("DropdownLegal", () => {
  const nuxtLinkStub = {
    template: '<a data-testid="dropdown-link" :to="to"><slot /></a>',
    props: ["to"],
  };

  it("renders trigger button with label and aria-label", async () => {
    await render(DropdownLegal, {
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
    expect(trigger.textContent).toMatch(/legal/i);
  });

  it("renders all navigation links when opened", async () => {
    await render(DropdownLegal, {
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

    const links = screen.getAllByTestId("dropdown-link");
    expect(links).toHaveLength(4);

    const hrefs = links.map((l) => l.getAttribute("to"));
    expect(hrefs).toEqual([
      "/docs/legal",
      "/docs/legal/trademark-policy",
      "/docs/legal/privacy-policy",
      "/docs/about/imprint",
    ]);

    expect(screen.getByText(/index/i)).toBeDefined();
    expect(screen.getByText(/trademark policy/i)).toBeDefined();
    expect(screen.getByText(/privacy policy/i)).toBeDefined();
    expect(screen.getByText(/imprint/i)).toBeDefined();
  });
});
