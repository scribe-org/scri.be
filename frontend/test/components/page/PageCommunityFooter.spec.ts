// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import { createI18n, Translation } from "vue-i18n";

import PageCommunityFooter from "../../../app/components/page/PageCommunityFooter.vue";
import en from "../../../Scribe-i18n/i18n/locales/en-US.json" with { type: "json" };
import render from "../../render";

// The i18n-t component needs a composer from the same vue-i18n build, so bind
// it to an English instance created here. The renamed copy keeps the stub from
// matching itself.
const { global: composer } = createI18n({
  legacy: false,
  locale: "en",
  messages: { en },
});
const BoundTranslation = { ...Translation, name: "BoundTranslation" };
const I18nT = defineComponent({
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(BoundTranslation, { ...attrs, i18n: composer }, slots);
  },
});

const renderFooter = async (options = {}) =>
  await render(PageCommunityFooter, {
    ...options,
    global: { stubs: { "i18n-t": I18nT } },
  });

const communityLinks = [
  {
    name: "on GitHub",
    href: "https://github.com/scribe-org",
    sentence: "Please visit us on GitHub to learn more about our projects",
  },
  {
    name: "public Matrix chat rooms",
    href: "https://matrix.to/#/#scribe_community:matrix.org",
    sentence:
      "Join us in our public Matrix chat rooms to discuss the projects and connect with the community",
  },
  {
    name: "Weblate internationalization project",
    href: "https://hosted.weblate.org/projects/scribe/scribe-i18n/",
    sentence:
      "Visit our Weblate internationalization project to help localize the applications",
  },
];

describe("PageCommunityFooter", () => {
  // MARK: Text

  it("renders the localized community heading", async () => {
    await renderFooter();

    const heading = screen.getByRole("heading", { level: 4 });
    expect(heading.textContent?.trim()).toBe("Join the community");
  });

  it("renders one list item per community invitation", async () => {
    await renderFooter();

    expect(screen.getAllByRole("listitem")).toHaveLength(communityLinks.length);
  });

  it.each(communityLinks)(
    "renders the localized invitation for $name",
    async ({ sentence }) => {
      await renderFooter();

      const items = screen
        .getAllByRole("listitem")
        .map((item) => item.textContent?.replace(/\s+/g, " ").trim());
      expect(items).toContain(sentence);
    }
  );

  // MARK: Links

  it.each(communityLinks)(
    "links $name to its page in a new tab",
    async ({ name, href }) => {
      await renderFooter();

      const link = screen.getByRole("link", { name });
      expect(link.getAttribute("href")).toBe(href);
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.closest("li")).not.toBeNull();
    }
  );

  it("marks each community link with an external link icon", async () => {
    await renderFooter();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(communityLinks.length);
    for (const link of links) {
      const icon = link.querySelector('[aria-hidden="true"]');
      expect(icon?.classList.contains("i-bi:box-arrow-up-right")).toBe(true);
    }
  });

  // MARK: Slot

  it("renders the default slot in the button row", async () => {
    await renderFooter({
      slots: { default: "<button>Next page</button>" },
    });

    const button = screen.getByRole("button", { name: "Next page" });
    expect(
      button.parentElement?.classList.contains("style-btns-next-to-one-another")
    ).toBe(true);
  });
});
