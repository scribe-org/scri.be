// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import BtnRouteExternal from "../../../../app/components/btn/route/BtnRouteExternal.vue";
import { renderButton } from "../helpers";

describe("BtnRouteExternal", () => {
  const defaultProps = {
    cta: true,
    fontSize: "base" as const,
    ariaLabel: "external route aria",
    linkTo: "https://example.com",
  };

  it("renders anchor element with href and target", async () => {
    await renderButton(BtnRouteExternal, defaultProps);

    const link = screen.getByRole("link");
    expect(link).toBeTruthy();
    expect(link.getAttribute("href")).toBe("https://example.com");
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("renders button with aria-label", async () => {
    await renderButton(BtnRouteExternal, defaultProps);

    const link = screen.getByRole("link");
    expect(link.getAttribute("aria-label")).toBe("external route aria");
  });

  it("applies base button classes", async () => {
    await renderButton(BtnRouteExternal, defaultProps);

    const link = screen.getByRole("link");
    expect(link.className).toContain("btn-base-class");
    expect(link.className).toContain("rounded-md");
    expect(link.className).toContain("xl:rounded-lg");
  });

  it("applies style-cta class when cta is true", async () => {
    await renderButton(BtnRouteExternal, { ...defaultProps, cta: true });

    const link = screen.getByRole("link");
    expect(link.className).toContain("style-cta");
  });

  it("applies style-cta-secondary class when cta is false", async () => {
    await renderButton(BtnRouteExternal, { ...defaultProps, cta: false });

    const link = screen.getByRole("link");
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
      await renderButton(BtnRouteExternal, { ...defaultProps, fontSize });

      const link = screen.getByRole("link");
      expect(link.className).toContain(expected);
    }
  });

  it("applies responsive classes for xl font size", async () => {
    await renderButton(BtnRouteExternal, { ...defaultProps, fontSize: "xl" });

    const link = screen.getByRole("link");
    expect(link.className).toContain("text-base");
    expect(link.className).toContain("sm:text-lg");
    expect(link.className).toContain("xl:text-xl");
    expect(link.className).toContain("xl:px-6");
    expect(link.className).toContain("xl:py-3");
  });

  it("applies responsive classes for 2xl font size", async () => {
    await renderButton(BtnRouteExternal, { ...defaultProps, fontSize: "2xl" });

    const link = screen.getByRole("link");
    expect(link.className).toContain("text-base");
    expect(link.className).toContain("sm:text-lg");
    expect(link.className).toContain("xl:text-2xl");
  });

  it("applies responsive classes for 3xl font size", async () => {
    await renderButton(BtnRouteExternal, { ...defaultProps, fontSize: "3xl" });

    const link = screen.getByRole("link");
    expect(link.className).toContain("text-base");
    expect(link.className).toContain("sm:text-lg");
    expect(link.className).toContain("xl:text-3xl");
  });

  it("applies id when provided", async () => {
    await renderButton(BtnRouteExternal, {
      ...defaultProps,
      id: "test-external-link",
    });

    const link = screen.getByRole("link");
    expect(link.getAttribute("id")).toBe("test-external-link");
  });

  it("does not apply id when omitted", async () => {
    await renderButton(BtnRouteExternal, defaultProps);

    const link = screen.getByRole("link");
    expect(link.getAttribute("id")).toBeNull();
  });
});
