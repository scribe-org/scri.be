// SPDX-License-Identifier: AGPL-3.0-or-later
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import IconConjugate from "../../../app/components/icon/IconConjugate.vue";

describe("Tests for IconConjugate", () => {
  it("renders SVG correctly", () => {
    const wrapper = mount(IconConjugate);

    expect(wrapper.find("svg").exists()).toBe(true);

    const path = wrapper.find("svg path");

    expect(path.exists()).toBe(true);
    expect(path.attributes("d")).toBe(
      "M58 9H100C100.552 9 101 9.44771 101 10V29H58V9ZM52 9H10C9.44771 9 9 9.44772 9 10V29H52V9ZM9 35V55H52V35H9ZM101 55H58V35H101V55ZM9 80V61H52V81H10C9.44772 81 9 80.5523 9 80ZM58 81H100C100.552 81 101 80.5523 101 80V61H58V81ZM0 10C0 4.47715 4.47715 0 10 0H100C105.523 0 110 4.47715 110 10V80C110 85.5229 105.523 90 100 90H10C4.47715 90 0 85.5229 0 80V10Z"
    );
  });

  it("Check so that size and color is correct", () => {
    const wrapper = mount(IconConjugate);
    const svg = wrapper.find("svg");

    expect(svg.attributes("fill")).toBe("currentColor");
    expect(svg.attributes("height")).toBe("90");
    expect(svg.attributes("width")).toBe("110");
  });

  it("Check so we have proper accesibility attributes", () => {
    const wrapper = mount(IconConjugate);
    const svg = wrapper.find("svg");
    const isAccessibleImage =
      svg.attributes("role") === "img" && !!svg.attributes("aria-label");

    const isDecorativeImage = svg.attributes("aria-hidden") === "true";

    expect(isDecorativeImage || isAccessibleImage).toBe(true);
  });
});
