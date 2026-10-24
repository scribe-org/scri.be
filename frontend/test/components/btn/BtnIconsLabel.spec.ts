// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import BtnIconsLabel from "../../../app/components/btn/BtnIconsLabel.vue";
import render from "../../render";

describe("BtnIconsLabel", () => {
  it("renders label with localization", async () => {
    await render(BtnIconsLabel, {
      props: {
        label: "label.test",
      },
    });

    expect(screen.getByText("label.test")).toBeDefined();
  });

  it("renders counter when provided", async () => {
    await render(BtnIconsLabel, {
      props: {
        label: "label.test",
        counter: 42,
      },
    });

    expect(screen.getByText("42")).toBeDefined();
  });

  it("renders left and right icons when provided", async () => {
    const { container } = await render(BtnIconsLabel, {
      props: {
        leftIcon: "mdi:arrow-left",
        rightIcon: "mdi:arrow-right",
      },
    });

    const icons = container.querySelectorAll(".iconify");
    expect(icons).toHaveLength(2);
    expect(container.querySelector(".i-mdi\\:arrow-left")).toBeTruthy();
    expect(container.querySelector(".i-mdi\\:arrow-right")).toBeTruthy();
  });
});
