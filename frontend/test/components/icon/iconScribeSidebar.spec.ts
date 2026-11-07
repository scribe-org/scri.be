// SPDX-License-Identifier: AGPL-3.0-or-later
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import IconScribeSidebar from "../../../app/components/icon/IconScribeSidebar.vue";

describe("Tests for IconScribeSidebar", () => {
  it("renders SVG correctly", () => {
    const wrapper = mount(IconScribeSidebar);

    expect(wrapper.find("svg").exists()).toBe(true);

    const path = wrapper.find("svg path");

    expect(path.exists()).toBe(true);
    expect(path.attributes("d")).toBe(
      "M36.9608 36.5728H149.165M10.9709 53.0693V100.59C10.9709 100.747 11.0333 100.899 11.1442 101.01C11.2551 101.122 11.4056 101.184 11.5625 101.184H161.624C161.706 101.186 161.789 101.171 161.865 101.139C161.942 101.107 162.01 101.059 162.067 100.999L204.953 53.5152C205.046 53.407 205.098 53.2684 205.098 53.125C205.098 52.9817 205.046 52.8431 204.953 52.7349L161.993 5.17727C161.936 5.11683 161.868 5.06906 161.791 5.03706C161.715 5.00506 161.632 4.98954 161.55 4.9915H11.5625C11.4056 4.9915 11.2551 5.05413 11.1442 5.16561C11.0333 5.2771 10.9709 5.42831 10.9709 5.58597V53.0693Z"
    );
  });

  it("Check so that size and color is correct", () => {
    const wrapper = mount(IconScribeSidebar);
    const svg = wrapper.find("svg");

    expect(svg.attributes("fill")).toBe("currentColor");
    expect(svg.attributes("height")).toBe("117");
    expect(svg.attributes("width")).toBe("216");
  });

  it("Check so we have proper accessibility attributes", () => {
    const wrapper = mount(IconScribeSidebar);
    const svg = wrapper.find("svg");
    const isAccessibleImage = svg.attributes("role") === "img";

    expect(isAccessibleImage).toBe(true);
  });
});
