// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import GridCommunityShields from "../../../app/components/grid/GridCommunityShields.vue";
import render from "../../render";

describe("GridCommunityShields", () => {
  // MARK: Shields

  describe("shields", () => {
    it("renders the GitHub and Matrix shields with their destinations", async () => {
      const { container } = await render(GridCommunityShields);

      const links = container.querySelectorAll("a");
      expect(links).toHaveLength(2);
      expect(links[0]?.getAttribute("href")).toBe(
        "https://github.com/scribe-org"
      );
      expect(links[1]?.getAttribute("href")).toBe(
        "https://matrix.to/#/#scribe_community:matrix.org"
      );
    });

    it("opens the shields in a new tab", async () => {
      const { container } = await render(GridCommunityShields);

      container.querySelectorAll("a").forEach((link) => {
        expect(link.getAttribute("target")).toBe("_blank");
      });
    });

    it("does not show the loading indicator", async () => {
      const { container } = await render(GridCommunityShields);

      expect(container.querySelector(".animate-pulse")).toBeNull();
    });
  });

  // MARK: Text

  describe("localized text", () => {
    it("renders the labels for each community", async () => {
      await render(GridCommunityShields);

      expect(screen.getByText("Visit us on")).toBeDefined();
      expect(screen.getByText("GitHub")).toBeDefined();
      expect(screen.getByText("Join us on")).toBeDefined();
      expect(screen.getByText("Matrix")).toBeDefined();
    });

    it("pairs each label with its community name", async () => {
      const { container } = await render(GridCommunityShields);

      const links = container.querySelectorAll("a");
      expect(links[0]?.textContent).toContain("Visit us on");
      expect(links[0]?.textContent).toContain("GitHub");
      expect(links[1]?.textContent).toContain("Join us on");
      expect(links[1]?.textContent).toContain("Matrix");
    });
  });

  // MARK: Layout

  describe("layout", () => {
    it("stacks the shields on small screens and lays them in a row above", async () => {
      const { container } = await render(GridCommunityShields);

      const grid = container.querySelector(".grid");
      expect(grid?.classList.contains("grid-flow-row")).toBe(true);
      expect(grid?.classList.contains("sm:grid-flow-col")).toBe(true);
    });
  });
});
