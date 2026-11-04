// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import ShieldCommunity from "../../../app/components/shield/ShieldCommunity.vue";
import render from "../../render";

describe("ShieldCommunity", () => {
  const baseProps = {
    href: "https://github.com/scribe-org",
    isLoading: false,
  };

  it("renders external link with destination and attributes", async () => {
    const { container } = await render(ShieldCommunity, {
      props: baseProps,
    });

    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toBe("https://github.com/scribe-org");
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.classList.contains("style-btn")).toBe(true);
  });

  it("renders slot content inside the link", async () => {
    await render(ShieldCommunity, {
      props: baseProps,
      slots: {
        default: '<span data-testid="community-content">GitHub</span>',
      },
    });

    const content = screen.getByTestId("community-content");
    expect(content).toBeDefined();
    expect(content.textContent).toBe("GitHub");
  });

  it("renders label text when provided", async () => {
    const { rerender } = await render(ShieldCommunity, {
      props: {
        ...baseProps,
        text: "Star",
      },
    });

    expect(screen.getByText("Star")).toBeDefined();

    await rerender({ ...baseProps, text: undefined });
    expect(screen.queryByText("Star")).toBeNull();
  });

  it("renders loading indicator when isLoading is true", async () => {
    const { container, rerender } = await render(ShieldCommunity, {
      props: {
        ...baseProps,
        isLoading: true,
      },
    });

    expect(container.querySelector(".animate-pulse")).not.toBeNull();

    await rerender({ ...baseProps, isLoading: false });
    expect(container.querySelector(".animate-pulse")).toBeNull();
  });

  it("renders count badge when count is provided", async () => {
    const { rerender } = await render(ShieldCommunity, {
      props: {
        ...baseProps,
        count: 42,
      },
    });

    expect(screen.getByText("42")).toBeDefined();

    await rerender({ ...baseProps, count: undefined });
    expect(screen.queryByText("42")).toBeNull();
  });
});

