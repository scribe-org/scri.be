// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ref } from "vue";

import PageContent from "../../../app/components/page/PageContent.vue";
import render from "../../render";

const { useBreakpointMock } = vi.hoisted(() => ({
  useBreakpointMock: vi.fn(),
}));

mockNuxtImport("useBreakpoint", () => useBreakpointMock);

const props = {
  imgAltText: "i18n.pages._global.data_img_alt_text",
  imgURL: "/icons/docs/bootstrap_file_text",
};

const altText =
  "A graphic showing connected data nodes with the Scribe-Data logo over it connecting to data related icons.";

const renderContent = async ({
  aboveMediumBP = false,
  above2xlBP = false,
  colorMode = "light",
  includeBreadcrumbs = undefined as boolean | undefined,
} = {}) => {
  useBreakpointMock.mockImplementation((name: string) =>
    ref(name === "2xl" ? above2xlBP : aboveMediumBP)
  );

  return await render(PageContent, {
    props: { ...props, includeBreadcrumbs },
    slots: { default: "<p>Page body</p>" },
    global: { mocks: { $colorMode: { value: colorMode } } },
  });
};

describe("PageContent", () => {
  beforeEach(() => {
    useBreakpointMock.mockReset();
  });

  // MARK: Slot

  it("renders the default slot content", async () => {
    await renderContent();

    const body = screen.getByText("Page body");
    expect(body.parentElement?.classList.contains("space-y-4")).toBe(true);
  });

  // MARK: Image

  it.each(["light", "dark"])(
    "renders the %s mode image with localized alt text",
    async (colorMode) => {
      await renderContent({ colorMode });

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(1);
      expect(images[0]?.getAttribute("src")).toBe(
        `/icons/docs/bootstrap_file_text_${colorMode}.png`
      );
      expect(images[0]?.getAttribute("alt")).toBe(altText);
    }
  );

  // MARK: Responsive Layout

  it("places the image above the content below the medium breakpoint", async () => {
    const { container } = await renderContent();

    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(1);
    expect(images[0]?.classList.contains("mb-4")).toBe(true);
    expect(images[0]?.nextElementSibling?.classList.contains("grid")).toBe(
      true
    );
  });

  it("floats the image next to the content between the medium and 2xl breakpoints", async () => {
    const { container } = await renderContent({ aboveMediumBP: true });

    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(1);
    expect(images[0]?.classList.contains("float-right")).toBe(true);
    expect(images[0]?.nextElementSibling?.textContent).toBe("Page body");
  });

  it("places the image in its own column above the 2xl breakpoint", async () => {
    const { container } = await renderContent({
      aboveMediumBP: true,
      above2xlBP: true,
    });

    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(1);
    expect(images[0]?.classList.contains("h-72")).toBe(true);
    expect(images[0]?.parentElement?.classList.contains("justify-end")).toBe(
      true
    );
  });

  // MARK: Breadcrumbs

  it("uses the full width when breadcrumbs are not included", async () => {
    const { container } = await renderContent({ aboveMediumBP: true });

    const grid = container.querySelector(".grid");
    expect(grid?.classList.contains("w-11/12")).toBe(false);
    expect(grid?.classList.contains("sm:w-10/12")).toBe(false);
  });

  it("narrows the layout when breadcrumbs are included", async () => {
    const { container } = await renderContent({
      aboveMediumBP: true,
      includeBreadcrumbs: true,
    });

    const grid = container.querySelector(".grid");
    expect(grid?.classList.contains("w-11/12")).toBe(true);
    expect(grid?.classList.contains("sm:w-10/12")).toBe(true);
  });
});
