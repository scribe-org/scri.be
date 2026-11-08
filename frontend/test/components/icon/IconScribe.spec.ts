// SPDX-License-Identifier: AGPL-3.0-or-later
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import IconScribe from "../../../app/components/icon/IconScribe.vue";

describe("Tests for IconScribe", () => {
  it("renders SVG correctly", () => {
    const wrapper = mount(IconScribe);

    expect(wrapper.find("svg").exists()).toBe(true);

    const path = wrapper.find("svg path");

    expect(path.exists()).toBe(true);
    expect(path.attributes("d")).toBe(
      "M2.50704 6.46429H11.169M0.857143 11.5H11.9891C12.0908 11.5 12.1877 11.4567 12.2554 11.3808L15.2873 7.98798C15.4085 7.85244 15.4085 7.64756 15.2873 7.51202L12.2554 4.11917C12.1877 4.04335 12.0908 4 11.9891 4H0.857143C0.659898 4 0.5 4.1599 0.5 4.35714V11.1429C0.5 11.3401 0.659898 11.5 0.857143 11.5Z"
    );
  });

  it("Check so that size and color is correct", () => {
    const wrapper = mount(IconScribe);
    const svg = wrapper.find("svg");

    expect(svg.attributes("fill")).toBe("none");
    expect(svg.attributes("height")).toBe("16");
    expect(svg.attributes("width")).toBe("16");
  });
});
