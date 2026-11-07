// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import ShieldApp from "../../../app/components/shield/ShieldApp.vue";
import render from "../../render";

describe("ShieldApp", () => {
  it("renders external link with destination and attributes", async () => {
    const { container } = await render(ShieldApp, {
      props: {
        href: "https://example.com/app",
      },
    });

    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toBe("https://example.com/app");
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.classList.contains("focus-brand")).toBe(true);
    expect(link?.classList.contains("card-style")).toBe(true);
  });

  it("renders slot content inside the link", async () => {
    await render(ShieldApp, {
      props: {
        href: "https://example.com/app",
      },
      slots: {
        default: '<span data-testid="shield-content">Download App</span>',
      },
    });

    const content = screen.getByTestId("shield-content");
    expect(content).toBeDefined();
    expect(content.textContent).toBe("Download App");
  });

  it("applies custom class passed as attribute", async () => {
    const { container } = await render(ShieldApp, {
      attrs: {
        class: "custom-shield-class",
      },
      props: {
        href: "https://example.com/app",
      },
    });

    const link = container.querySelector("a");
    expect(link?.classList.contains("custom-shield-class")).toBe(true);
  });
});
