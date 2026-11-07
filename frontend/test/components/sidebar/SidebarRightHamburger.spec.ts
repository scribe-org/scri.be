// SPDX-License-Identifier: AGPL-3.0-or-later
import { fireEvent } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import SidebarRightHamburger from "../../../app/components/sidebar/right/SidebarRightHamburger.vue";
import render from "../../render";

describe("SidebarRightHamburger", () => {
  it("renders hamburger button with aria-label", async () => {
    const { container } = await render(SidebarRightHamburger);

    const button = container.querySelector("button#sidebar-right-hamburger");
    expect(button).not.toBeNull();
    expect(button?.getAttribute("aria-label")).toBeTruthy();
  });

  it("emits toggle when clicked", async () => {
    const { container, emitted } = await render(SidebarRightHamburger);

    const button = container.querySelector("button#sidebar-right-hamburger")!;
    await fireEvent.click(button);

    expect(emitted().toggle).toHaveLength(1);
  });

  it("updates bar transforms and opacity based on menuOpen prop", async () => {
    const { container, rerender } = await render(SidebarRightHamburger, {
      props: { menuOpen: false },
    });

    const spans = container.querySelectorAll("span");
    expect(spans).toHaveLength(4);
    expect(spans[1]?.classList.contains("rotate-45")).toBe(false);
    expect(spans[2]?.classList.contains("-rotate-45")).toBe(false);

    await rerender({ menuOpen: true });

    expect(spans[0]?.classList.contains("opacity-0")).toBe(true);
    expect(spans[1]?.classList.contains("rotate-45")).toBe(true);
    expect(spans[2]?.classList.contains("-rotate-45")).toBe(true);
    expect(spans[3]?.classList.contains("opacity-0")).toBe(true);
  });
});
