// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ref } from "vue";

import LandingContent from "../../../app/components/landing/LandingContent.vue";
import render from "../../render";

const { useBreakpointMock } = vi.hoisted(() => ({
  useBreakpointMock: vi.fn(),
}));

mockNuxtImport("useBreakpoint", () => useBreakpointMock);
mockNuxtImport("useLocalePath", () => () => (path: string) => `/en${path}`);

const sideProps = {
  btnAriaLabel1: "i18n.pages.index.language_keyboards_aria_label",
  btnId1: "btn-keyboard-apps",
  btnText1: "i18n._global.learn_more",
  btnUrl1: "/docs/keyboard-apps/learn-more",
  header: "i18n.pages._global.language_keyboards",
  imageAltText: "i18n.pages._global.language_keyboards_img_alt_text",
  imgURL: "/images/keyboards",
  tagline: "i18n.pages.index.language_keyboards_tagline",
  text: "i18n.pages.index.language_keyboards_text",
};

const topProps = {
  btnAriaLabel1: "i18n.pages.index.our_supporters_btn_become_aria_label",
  btnAriaLabel2: "i18n.pages.index.our_supporters_btn_view_aria_label",
  btnId1: "btn-support-us",
  btnId2: "btn-supporters-showcase",
  btnText1: "i18n.pages._global.become_supporter",
  btnText2: "i18n.pages.index.view_all_supporters",
  btnUrl1: "/docs/about/support-us",
  btnUrl2: "/docs/about/supporters-showcase",
  contentPosition: "top" as const,
  header: "i18n.pages._global.our_supporters",
  imageAltText: "",
  tagline: "i18n.pages.index.our_supporters_tagline",
  text: "i18n.pages.index.our_supporters_text",
};

const renderContent = async (
  props:
    | (typeof sideProps & { contentPosition: "left" | "right" })
    | typeof topProps,
  { aboveLargeBP = false, colorMode = "light" } = {}
) => {
  useBreakpointMock.mockReturnValue(ref(aboveLargeBP));

  return await render(LandingContent, {
    props,
    global: { mocks: { $colorMode: { value: colorMode } } },
  });
};

describe("LandingContent", () => {
  beforeEach(() => {
    useBreakpointMock.mockReset();
  });

  // MARK: Side Layouts

  describe.each(["left", "right"] as const)(
    "%s content position",
    (contentPosition) => {
      const props = { ...sideProps, contentPosition };

      it("renders the heading, tagline and body copy", async () => {
        await renderContent(props);

        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading.textContent?.trim()).toBe("Language Keyboards");
        expect(screen.getByText("Communicate with confidence")).toBeDefined();
        expect(
          screen.getByText(
            /Our flagship application is Scribe Language Keyboards/
          )
        ).toBeDefined();
      });

      it("renders a CTA that routes to the localized button URL", async () => {
        await renderContent(props);

        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(1);

        const cta = links[0]!;
        expect(cta.getAttribute("href")).toBe(
          "/en/docs/keyboard-apps/learn-more"
        );
        expect(cta.getAttribute("id")).toBe("btn-keyboard-apps");
        expect(cta.getAttribute("aria-label")).toBe(
          "Learn more about the Scribe language keyboard applications"
        );
        expect(cta.classList.contains("style-cta")).toBe(true);
        expect(cta.textContent).toContain("Learn More");
      });

      it("renders the light image when in light mode", async () => {
        const { container } = await renderContent(props, {
          colorMode: "light",
        });

        const images = container.querySelectorAll("img");
        expect(images).toHaveLength(1);
        expect(images[0]?.getAttribute("src")).toBe(
          "/images/keyboards_light.png"
        );
        expect(images[0]?.getAttribute("alt")).toBeTruthy();
      });

      it("renders the dark image when in dark mode", async () => {
        const { container } = await renderContent(props, {
          colorMode: "dark",
        });

        const images = container.querySelectorAll("img");
        expect(images).toHaveLength(1);
        expect(images[0]?.getAttribute("src")).toBe(
          "/images/keyboards_dark.png"
        );
      });

      it("places the image above the content below the large breakpoint", async () => {
        const { container } = await renderContent(props, {
          aboveLargeBP: false,
        });

        const image = container.querySelector("img");
        expect(image?.classList.contains("mb-4")).toBe(true);
        expect(image?.nextElementSibling?.tagName).toBe("H2");
      });

      it("places the image beside the content above the large breakpoint", async () => {
        const { container } = await renderContent(props, {
          aboveLargeBP: true,
        });

        const images = container.querySelectorAll("img");
        expect(images).toHaveLength(1);
        expect(images[0]?.parentElement?.classList.contains("size-60")).toBe(
          true
        );
        expect(images[0]?.nextElementSibling).toBeNull();
      });
    }
  );

  it("renders the image after the content for the left position", async () => {
    const { container } = await renderContent(
      { ...sideProps, contentPosition: "left" },
      { aboveLargeBP: true }
    );

    const layout = container.firstElementChild!;
    expect(layout.lastElementChild?.querySelector("img")).not.toBeNull();
    expect(layout.firstElementChild?.querySelector("h2")).not.toBeNull();
  });

  it("renders the image before the content for the right position", async () => {
    const { container } = await renderContent(
      { ...sideProps, contentPosition: "right" },
      { aboveLargeBP: true }
    );

    const layout = container.firstElementChild!;
    expect(layout.firstElementChild?.querySelector("img")).not.toBeNull();
    expect(layout.lastElementChild?.querySelector("h2")).not.toBeNull();
  });

  // MARK: Top Layout

  describe("top content position", () => {
    it("renders the heading, tagline and body copy", async () => {
      await renderContent(topProps);

      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading.textContent?.trim()).toBe("Our Supporters");
      expect(screen.getByText("Community sponsors and backers")).toBeDefined();
      expect(
        screen.getByText(/Help us create and maintain our open-source/)
      ).toBeDefined();
    });

    it("renders both CTAs routing to their localized URLs", async () => {
      await renderContent(topProps);

      const becomeSupporter = screen.getByLabelText(
        "Become a supporter of Scribe"
      );
      expect(becomeSupporter.getAttribute("href")).toBe(
        "/en/docs/about/support-us"
      );
      expect(becomeSupporter.getAttribute("id")).toBe("btn-support-us");
      expect(becomeSupporter.textContent).toContain("Become a Supporter");

      const viewSupporters = screen.getByLabelText(
        "View all supporters of Scribe"
      );
      expect(viewSupporters.getAttribute("href")).toBe(
        "/en/docs/about/supporters-showcase"
      );
      expect(viewSupporters.getAttribute("id")).toBe("btn-supporters-showcase");
      expect(viewSupporters.textContent).toContain("View all supporters");
    });

    it("renders the partner badges", async () => {
      await renderContent(topProps);

      const foundation = screen.getByLabelText(
        "Link to the website of Wikimedia Foundation"
      );
      expect(foundation.getAttribute("href")).toBe(
        "https://wikimediafoundation.org"
      );
      expect(screen.getByText("Wikimedia Foundation")).toBeDefined();

      const deutschland = screen.getByLabelText(
        "Link to the website of Wikimedia Deutschland"
      );
      expect(deutschland.getAttribute("href")).toBe("https://www.wikimedia.de");
      expect(screen.getByText("Wikimedia Deutschland")).toBeDefined();
    });

    it("does not render any content images", async () => {
      const { container } = await renderContent(topProps);

      expect(container.querySelectorAll("img")).toHaveLength(0);
    });

    it("renders the sub text only when provided", async () => {
      const { rerender } = await renderContent(topProps);

      expect(screen.queryByText("Learn More")).toBeNull();

      await rerender({ ...topProps, subText: "i18n._global.learn_more" });
      expect(screen.getByText("Learn More")).toBeDefined();
    });
  });
});
