// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import MetaTag from "../../../app/components/meta-tag/MetaTag.vue";
import render from "../../render";

const baseProps = {
  iconName: "bi:geo-alt",
  value: "Berlin, Germany",
};

describe("MetaTag", () => {
  // MARK: Content

  describe("content", () => {
    it("renders the value", async () => {
      await render(MetaTag, { props: baseProps });

      expect(screen.getByText("Berlin, Germany")).toBeDefined();
    });

    it("renders the translated label when a label is provided", async () => {
      await render(MetaTag, {
        props: { ...baseProps, label: "test.meta.label" },
      });

      expect(screen.getByText("Berlin, Germany")).toBeDefined();
      expect(screen.getByText("test.meta.label")).toBeDefined();
    });

    it("does not render a label element when no label is provided", async () => {
      const { container } = await render(MetaTag, { props: baseProps });

      expect(container.querySelectorAll("p")).toHaveLength(1);
    });

    it("renders the label after the value", async () => {
      const { container } = await render(MetaTag, {
        props: { ...baseProps, label: "test.meta.label" },
      });

      const paragraphs = container.querySelectorAll("p");
      expect(paragraphs).toHaveLength(2);
      expect(paragraphs[0]?.textContent?.trim()).toBe("Berlin, Germany");
      expect(paragraphs[1]?.textContent?.trim()).toBe("test.meta.label");
    });
  });

  // MARK: Icon

  describe("icon", () => {
    it("renders a single icon", async () => {
      const { container } = await render(MetaTag, { props: baseProps });

      expect(container.querySelectorAll(".iconify")).toHaveLength(1);
    });

    it("applies the margin class to the icon", async () => {
      const { container } = await render(MetaTag, { props: baseProps });

      const icon = container.querySelector(".iconify");
      expect(icon?.classList.contains("mr-1")).toBe(true);
    });
  });
});
