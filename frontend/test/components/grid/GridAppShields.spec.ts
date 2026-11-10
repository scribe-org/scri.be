// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import GridAppShields from "../../../app/components/grid/GridAppShields.vue";
import render from "../../render";

describe("GridAppShields", () => {
  // MARK: Shields

  describe("shields", () => {
    it("renders one external shield link per app store", async () => {
      const { container } = await render(GridAppShields);

      const links = container.querySelectorAll("a");
      expect(links).toHaveLength(3);
      links.forEach((link) => {
        expect(link.getAttribute("href")).toBe("/");
        expect(link.getAttribute("target")).toBe("_blank");
      });
    });

    it("renders the stores in order", async () => {
      const { container } = await render(GridAppShields);

      const links = container.querySelectorAll("a");
      expect(links[0]?.textContent).toContain("App Store");
      expect(links[1]?.textContent).toContain("Google Play");
      expect(links[2]?.textContent).toContain("F-Droid");
    });

    it("renders an icon in each shield", async () => {
      const { container } = await render(GridAppShields);

      container.querySelectorAll("a").forEach((link) => {
        expect(link.querySelector("svg, span, img")).not.toBeNull();
      });
    });
  });

  // MARK: Text

  describe("localized text", () => {
    it("renders the download label once for the App Store", async () => {
      await render(GridAppShields);

      expect(screen.getAllByText("Download on the")).toHaveLength(1);
      expect(screen.getByText("App Store")).toBeDefined();
    });

    it("renders the get it on label for Google Play and F-Droid", async () => {
      await render(GridAppShields);

      expect(screen.getAllByText("Get it on")).toHaveLength(2);
      expect(screen.getByText("Google Play")).toBeDefined();
      expect(screen.getByText("F-Droid")).toBeDefined();
    });
  });

  // MARK: Layout

  describe("layout", () => {
    it("stacks the shields on small screens and lays them in a row above", async () => {
      const { container } = await render(GridAppShields);

      const grid = container.querySelector(".grid");
      expect(grid?.classList.contains("grid-flow-row")).toBe(true);
      expect(grid?.classList.contains("sm:grid-flow-col")).toBe(true);
    });
  });
});
