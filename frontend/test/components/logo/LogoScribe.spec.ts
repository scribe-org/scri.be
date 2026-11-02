// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";

import LogoScribe from "../../../app/components/logo/LogoScribe.vue";
import render from "../../render";

const { mockLocalePath } = vi.hoisted(() => ({
  mockLocalePath: vi.fn((path: string) => `/en${path}`),
}));

mockNuxtImport("useLocalePath", () => () => mockLocalePath);

describe("LogoScribe", () => {
  const nuxtLinkStub = {
    template:
      '<a data-testid="logo-link" :to="to" v-bind="$attrs"><slot /></a>',
    props: ["to"],
  };

  it("renders a link to the home page with localized path", async () => {
    await render(LogoScribe, {
      global: {
        stubs: {
          NuxtLink: nuxtLinkStub,
        },
      },
    });

    const link = screen.getByTestId("logo-link");
    expect(mockLocalePath).toHaveBeenCalledWith("/");
    expect(link.getAttribute("to")).toBe("/en/");
    expect(link.classList.contains("focus-brand")).toBe(true);
  });

  it("renders aria-label and accessible screen-reader text", async () => {
    await render(LogoScribe, {
      global: {
        stubs: {
          NuxtLink: nuxtLinkStub,
        },
      },
    });

    const link = screen.getByTestId("logo-link");
    expect(link.getAttribute("aria-label")).toBe(
      "The Scribe logo - the word Scribe written in cursive swooping above to pencil that's writing it"
    );

    const srText = link.querySelector(".sr-only");
    expect(srText).not.toBeNull();
    expect(srText?.textContent).toBe(
      "i18n.components._global.navigate_to_start"
    );
  });

  it("renders SVG with dimensions and paths", async () => {
    const { container } = await render(LogoScribe, {
      global: {
        stubs: {
          NuxtLink: nuxtLinkStub,
        },
      },
    });

    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute("viewBox")).toBe("0 0 831 405");
    expect(svg?.getAttribute("width")).toBe("831");
    expect(svg?.getAttribute("height")).toBe("405");
    expect(svg?.querySelectorAll("path").length).toBeGreaterThan(0);
  });
});
