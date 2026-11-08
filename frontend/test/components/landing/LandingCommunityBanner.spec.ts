// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import LandingCommunityBanner from "../../../app/components/landing/LandingCommunityBanner.vue";
import render from "../../render";

describe("LandingCommunityBanner", () => {
  const communities = [
    { name: "GitHub", href: "https://github.com/scribe-org" },
    {
      name: "Matrix",
      href: "https://matrix.to/#/#scribe_community:matrix.org",
    },
    { name: "Mastodon", href: "https://wikis.world/@scribe" },
  ];

  it("renders a link for each community platform", async () => {
    const { container } = await render(LandingCommunityBanner);

    expect(container.querySelectorAll("a")).toHaveLength(communities.length);
  });

  it.each(communities)(
    "links to $name in a new tab with an accessible label",
    async ({ name, href }) => {
      await render(LandingCommunityBanner);

      const link = screen.getByLabelText(name);
      expect(link.tagName).toBe("A");
      expect(link.getAttribute("href")).toBe(href);
      expect(link.getAttribute("target")).toBe("_blank");
    }
  );

  it.each(communities)("renders the $name badge text", async ({ name }) => {
    await render(LandingCommunityBanner);

    const text = screen.getByText(name);
    expect(text.closest("a")?.getAttribute("aria-label")).toBe(name);
  });

  it("renders an icon for each community badge", async () => {
    const { container } = await render(LandingCommunityBanner);

    for (const link of container.querySelectorAll("a")) {
      expect(link.querySelector('[aria-hidden="true"]')).not.toBeNull();
    }
  });
});
