// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from "vitest";

import SidebarLeftToggle from "../../../app/components/sidebar/left/SidebarLeftToggle.vue";
import render from "../../render";

describe("SidebarLeftToggle", () => {
  it("renders left chevron when chevronDirection is left", async () => {
    const { container } = await render(SidebarLeftToggle, {
      props: {
        chevronDirection: "left",
        iconSize: "1.4em",
      },
    });

    const wrapper = container.querySelector(".rounded-md");
    expect(wrapper).not.toBeNull();
    const icon = container.querySelector(".i-bi\\:chevron-bar-left");
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute("style")).toContain("font-size: 1.4em");
  });

  it("renders right chevron when chevronDirection is right", async () => {
    const { container } = await render(SidebarLeftToggle, {
      props: {
        chevronDirection: "right",
        iconSize: "1.4em",
      },
    });

    const wrapper = container.querySelector(".rounded-md");
    expect(wrapper).not.toBeNull();
    const icon = container.querySelector(".i-bi\\:chevron-bar-right");
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute("style")).toContain("font-size: 1.4em");
  });
});
