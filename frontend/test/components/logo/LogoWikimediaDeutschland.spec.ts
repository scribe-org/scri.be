// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from "vitest";

import LogoWikimediaDeutschland from "../../../app/components/logo/LogoWikimediaDeutschland.vue";
import render from "../../render";

describe("LogoWikimediaDeutschland", () => {
  it("renders SVG with default attributes and accessibility", async () => {
    const { container } = await render(LogoWikimediaDeutschland);

    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
    expect(svg?.getAttribute("viewBox")).toBe("0 0 992 992");
    expect(svg?.getAttribute("width")).toBe("992");
    expect(svg?.getAttribute("height")).toBe("992");
    expect(svg?.querySelector("path")).not.toBeNull();
  });

  it("applies theme adjustment class", async () => {
    const { container } = await render(LogoWikimediaDeutschland);

    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("fill-distinct-text")).toBe(true);
  });

  it("applies custom dimensions and classes when passed", async () => {
    const { container } = await render(LogoWikimediaDeutschland, {
      attrs: {
        class: "custom-logo",
        height: "120",
        width: "120",
      },
    });

    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("height")).toBe("120");
    expect(svg?.getAttribute("width")).toBe("120");
    expect(svg?.classList.contains("custom-logo")).toBe(true);
  });
});
