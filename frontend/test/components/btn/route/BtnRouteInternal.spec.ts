// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";

import BtnRouteInternal from "../../../../app/components/btn/route/BtnRouteInternal.vue";
import { renderButton } from "../helpers";

const { mockLocalePath } = vi.hoisted(() => ({
  mockLocalePath: vi.fn((path: string) => `/en${path}`),
}));

mockNuxtImport("useLocalePath", () => () => mockLocalePath);

describe("BtnRouteInternal", () => {
  beforeEach(() => {
    mockLocalePath.mockClear();
  });

  const defaultProps = {
    cta: true,
    fontSize: "base" as const,
    ariaLabel: "internal route aria",
    linkTo: "/test-page",
  };

  const nuxtLinkStub = {
    template:
      '<a data-testid="nuxt-link" :to="to" v-bind="$attrs"><slot /></a>',
    props: ["to"],
  };

  it("renders NuxtLink with localized path", async () => {
    await renderButton(BtnRouteInternal, defaultProps, {
      NuxtLink: nuxtLinkStub,
    });

    const link = screen.getByTestId("nuxt-link");
    expect(link).toBeTruthy();
    expect(mockLocalePath).toHaveBeenCalledWith("/test-page");
    expect(link.getAttribute("to")).toBe("/en/test-page");
  });

  it("renders button with aria-label", async () => {
    await renderButton(BtnRouteInternal, defaultProps, {
      NuxtLink: nuxtLinkStub,
    });

    const link = screen.getByTestId("nuxt-link");
    expect(link.getAttribute("aria-label")).toBe("internal route aria");
  });

  it("applies base button classes", async () => {
    await renderButton(BtnRouteInternal, defaultProps, {
      NuxtLink: nuxtLinkStub,
    });

    const link = screen.getByTestId("nuxt-link");
    expect(link.className).toContain("btn-base-class");
    expect(link.className).toContain("rounded-md");
    expect(link.className).toContain("xl:rounded-lg");
  });

  it("applies style-cta class when cta is true", async () => {
    await renderButton(
      BtnRouteInternal,
      { ...defaultProps, cta: true },
      { NuxtLink: nuxtLinkStub }
    );

    const link = screen.getByTestId("nuxt-link");
    expect(link.className).toContain("style-cta");
  });

  it("applies style-cta-secondary class when cta is false", async () => {
    await renderButton(
      BtnRouteInternal,
      { ...defaultProps, cta: false },
      { NuxtLink: nuxtLinkStub }
    );

    const link = screen.getByTestId("nuxt-link");
    expect(link.className).toContain("style-cta-secondary");
  });

  it("applies font size classes correctly", async () => {
    const fontSizeTests = [
      { fontSize: "xs" as const, expected: "text-xs" },
      { fontSize: "sm" as const, expected: "text-sm" },
      { fontSize: "base" as const, expected: "text-base" },
      { fontSize: "lg" as const, expected: "text-lg" },
    ];

    for (const { fontSize, expected } of fontSizeTests) {
      await renderButton(
        BtnRouteInternal,
        { ...defaultProps, fontSize },
        { NuxtLink: nuxtLinkStub }
      );

      const link = screen.getByTestId("nuxt-link");
      expect(link.className).toContain(expected);
    }
  });

  it("applies responsive classes for xl font size", async () => {
    await renderButton(
      BtnRouteInternal,
      { ...defaultProps, fontSize: "xl" },
      { NuxtLink: nuxtLinkStub }
    );

    const link = screen.getByTestId("nuxt-link");
    expect(link.className).toContain("text-base");
    expect(link.className).toContain("sm:text-lg");
    expect(link.className).toContain("xl:text-xl");
    expect(link.className).toContain("xl:px-6");
    expect(link.className).toContain("xl:py-3");
  });

  it("applies responsive classes for 2xl font size", async () => {
    await renderButton(
      BtnRouteInternal,
      { ...defaultProps, fontSize: "2xl" },
      { NuxtLink: nuxtLinkStub }
    );

    const link = screen.getByTestId("nuxt-link");
    expect(link.className).toContain("text-base");
    expect(link.className).toContain("sm:text-lg");
    expect(link.className).toContain("xl:text-2xl");
  });

  it("applies responsive classes for 3xl font size", async () => {
    await renderButton(
      BtnRouteInternal,
      { ...defaultProps, fontSize: "3xl" },
      { NuxtLink: nuxtLinkStub }
    );

    const link = screen.getByTestId("nuxt-link");
    expect(link.className).toContain("text-base");
    expect(link.className).toContain("sm:text-lg");
    expect(link.className).toContain("xl:text-3xl");
  });

  it("applies id when provided", async () => {
    await renderButton(
      BtnRouteInternal,
      { ...defaultProps, id: "test-internal-link" },
      { NuxtLink: nuxtLinkStub }
    );

    const link = screen.getByTestId("nuxt-link");
    expect(link.getAttribute("id")).toBe("test-internal-link");
  });

  it("does not apply id when omitted", async () => {
    await renderButton(BtnRouteInternal, defaultProps, {
      NuxtLink: nuxtLinkStub,
    });

    const link = screen.getByTestId("nuxt-link");
    expect(link.getAttribute("id")).toBeNull();
  });
});
