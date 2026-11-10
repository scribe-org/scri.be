// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import GridSupporters from "../../../app/components/grid/GridSupporters.vue";
import render from "../../render";

describe("GridSupporters", () => {
  // MARK: Logos

  describe("logos", () => {
    it("renders a link for each supporter", async () => {
      const { container } = await render(GridSupporters);

      const links = container.querySelectorAll("a");
      expect(links).toHaveLength(2);
      expect(links[0]?.getAttribute("href")).toBe(
        "https://wikimediafoundation.org"
      );
      expect(links[1]?.getAttribute("href")).toBe("https://www.wikimedia.de");
    });

    it("opens the supporter links in a new tab", async () => {
      const { container } = await render(GridSupporters);

      container.querySelectorAll("a").forEach((link) => {
        expect(link.getAttribute("target")).toBe("_blank");
      });
    });

    it("renders a logo for each supporter", async () => {
      const { container } = await render(GridSupporters);

      container.querySelectorAll("a").forEach((link) => {
        expect(link.querySelector("svg")).not.toBeNull();
      });
    });

    it("renders the supporters in order", async () => {
      await render(GridSupporters);

      const names = screen
        .getAllByText(/Wikimedia/)
        .map((element) => element.textContent);
      expect(names).toEqual(["Wikimedia Foundation", "Wikimedia Deutschland"]);
    });
  });

  // MARK: Accessibility

  describe("accessibility", () => {
    it("labels each link with its localized aria label", async () => {
      const { container } = await render(GridSupporters);

      const links = container.querySelectorAll("a");
      expect(links[0]?.getAttribute("aria-label")).toBe(
        "Link to the website of Wikimedia Foundation"
      );
      expect(links[1]?.getAttribute("aria-label")).toBe(
        "Link to the website of Wikimedia Deutschland"
      );
    });
  });

  // MARK: Layout

  describe("layout", () => {
    it("stacks the logos on small screens and places them side by side above", async () => {
      const { container } = await render(GridSupporters);

      const grid = container.querySelector(".grid");
      expect(grid?.classList.contains("grid-cols-1")).toBe(true);
      expect(grid?.classList.contains("sm:grid-cols-2")).toBe(true);
    });
  });
});
