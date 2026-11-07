// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from "vitest";

import LogoWikimediaFoundation from "../../../app/components/logo/LogoWikimediaFoundation.vue";
import render from "../../render";

describe("LogoWikimediaFoundation", () => {
  it("renders SVG with default attributes and accessibility", async () => {
    const { container } = await render(LogoWikimediaFoundation);

    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
    expect(svg?.getAttribute("viewBox")).toBe("0 0 562 562");
    expect(svg?.getAttribute("width")).toBe("562");
    expect(svg?.getAttribute("height")).toBe("562");
    expect(svg?.querySelectorAll("path").length).toBeGreaterThan(0);
  });

  it("applies theme adjustment class", async () => {
    const { container } = await render(LogoWikimediaFoundation);

    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("fill-distinct-text")).toBe(true);
  });

  it("applies custom dimensions and classes when passed", async () => {
    const { container } = await render(LogoWikimediaFoundation, {
      attrs: {
        class: "custom-logo",
        height: "100",
        width: "100",
      },
    });

    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("height")).toBe("100");
    expect(svg?.getAttribute("width")).toBe("100");
    expect(svg?.classList.contains("custom-logo")).toBe(true);
  });
});
