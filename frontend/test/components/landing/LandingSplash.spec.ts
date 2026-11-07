// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from "vitest";

import LandingSplash from "../../../app/components/landing/LandingSplash.vue";
import render from "../../render";

describe("LandingSplash", () => {
  it("renders the Scribe logo with alt text", async () => {
    const { container } = await render(LandingSplash);

    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(1);
    expect(images[0]?.getAttribute("src")).toBe(
      "/images/scribe/scribe_logo.svg"
    );
    expect(images[0]?.getAttribute("alt")).toBeTruthy();
  });

  it("renders the logo inside the brand colored splash area", async () => {
    const { container } = await render(LandingSplash);

    const logo = container.querySelector("img");
    expect(logo?.closest(".bg-scribe-blue")).not.toBeNull();
  });
});
