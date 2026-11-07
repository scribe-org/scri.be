// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { fireEvent, screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";

import DropdownServer from "../../../app/components/dropdown/DropdownServer.vue";
import render from "../../render";

const mockIsCurrentPath = vi.fn((path: string) => path === "/docs/server");

mockNuxtImport("useCurrentPath", () => () => ({
  isCurrentPath: mockIsCurrentPath,
}));

describe("DropdownServer", () => {
  const nuxtLinkStub = {
    template: '<a data-testid="dropdown-link" :to="to"><slot /></a>',
    props: ["to"],
  };

  it("renders trigger button with label and aria-label", async () => {
    await render(DropdownServer, {
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
    expect(trigger.textContent).toMatch(/data server/i);
  });

  it("renders all navigation links when opened", async () => {
    await render(DropdownServer, {
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
      "/docs/server",
      "/docs/server/learn-more",
      "/docs/server/available-data",
      "/docs/server/changelog",
    ]);

    expect(screen.getByText(/index/i)).toBeDefined();
    expect(screen.getByText(/learn more/i)).toBeDefined();
    expect(screen.getByText(/available data/i)).toBeDefined();
    expect(screen.getByText(/changelog/i)).toBeDefined();
  });
});
