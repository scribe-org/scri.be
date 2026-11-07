// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { fireEvent, screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";

import DropdownAbout from "../../../app/components/dropdown/DropdownAbout.vue";
import render from "../../render";

const mockIsCurrentPath = vi.fn((path: string) => path === "/docs/about");

mockNuxtImport("useCurrentPath", () => () => ({
  isCurrentPath: mockIsCurrentPath,
}));

describe("DropdownAbout", () => {
  const nuxtLinkStub = {
    template: '<a data-testid="dropdown-link" :to="to"><slot /></a>',
    props: ["to"],
  };

  it("renders trigger button with label and aria-label", async () => {
    await render(DropdownAbout, {
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
    expect(trigger.textContent).toMatch(/about scribe/i);
  });

  it("renders all navigation links when opened", async () => {
    await render(DropdownAbout, {
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
    expect(links).toHaveLength(5);

    const hrefs = links.map((l) => l.getAttribute("to"));
    expect(hrefs).toEqual([
      "/docs/about",
      "/docs/about/community",
      "/docs/about/blog-posts",
      "/docs/about/supporters-showcase",
      "/docs/about/support-us",
    ]);

    expect(screen.getByText(/index/i)).toBeDefined();
    expect(screen.getByText(/our community/i)).toBeDefined();
    expect(screen.getByText(/blog posts/i)).toBeDefined();
    expect(screen.getByText(/supporters/i)).toBeDefined();
    expect(screen.getByText(/support scribe/i)).toBeDefined();
  });
});
