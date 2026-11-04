// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import MetaTagSocialMedia from "../../../app/components/meta-tag/MetaTagSocialMedia.vue";
import render from "../../render";

const baseProps = {
  iconName: "bi:github",
  text: "scribe-org",
};

describe("MetaTagSocialMedia", () => {
  // MARK: Content

  describe("content", () => {
    it("renders the text", async () => {
      await render(MetaTagSocialMedia, { props: baseProps });

      expect(screen.getByText("scribe-org")).toBeDefined();
    });

    it("renders a single icon", async () => {
      const { container } = await render(MetaTagSocialMedia, {
        props: baseProps,
      });

      expect(container.querySelectorAll(".iconify")).toHaveLength(1);
    });

    it("renders the icon before the text", async () => {
      await render(MetaTagSocialMedia, { props: baseProps });

      const icon = screen.getByText("scribe-org").previousElementSibling;
      expect(icon?.classList.contains("iconify")).toBe(true);
    });
  });

  // MARK: Styling

  describe("styling", () => {
    it("makes the whole row a clickable target", async () => {
      await render(MetaTagSocialMedia, { props: baseProps });

      const wrapper = screen.getByText("scribe-org").parentElement;
      expect(wrapper?.classList.contains("cursor-pointer")).toBe(true);
      expect(wrapper?.classList.contains("size-full")).toBe(true);
    });

    it("applies the text utility classes to the text", async () => {
      await render(MetaTagSocialMedia, {
        props: {
          ...baseProps,
          textUtilityClasses: "font-bold text-primary-text",
        },
      });

      const text = screen.getByText("scribe-org");
      expect(text.classList.contains("font-bold")).toBe(true);
      expect(text.classList.contains("text-primary-text")).toBe(true);
    });

    it("leaves the text without extra classes when none are provided", async () => {
      await render(MetaTagSocialMedia, { props: baseProps });

      const text = screen.getByText("scribe-org");
      expect(text.getAttribute("class") ?? "").toBe("");
    });
  });
});
