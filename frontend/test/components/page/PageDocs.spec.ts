// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { defineComponent, h, ref } from "vue";

import PageDocs from "../../../app/components/page/PageDocs.vue";
import render from "../../render";

mockNuxtImport("useBreakpoint", () => () => ref(true));

const props = {
  imgAltText: "i18n.pages._global.data_img_alt_text",
  imgURL: "/icons/docs/bootstrap_file_text",
};

// Stub that exposes the props the docs layout passes on to PageContent.
const PageContent = defineComponent({
  props: ["imgAltText", "imgURL", "includeBreadcrumbs"],
  render() {
    return h(
      "section",
      {
        "data-testid": "page-content",
        "data-img-alt-text": this.imgAltText,
        "data-img-url": this.imgURL,
        "data-include-breadcrumbs": String(this.includeBreadcrumbs),
      },
      this.$slots.default?.()
    );
  },
});

const renderDocs = async (stubContent = true) =>
  await render(PageDocs, {
    props,
    slots: { default: "<h1>Docs article</h1>" },
    global: {
      mocks: { $colorMode: { value: "light" } },
      ...(stubContent ? { stubs: { PageContent } } : {}),
    },
  });

describe("PageDocs", () => {
  // MARK: Layout

  it("wraps the article in a centered full width column", async () => {
    await renderDocs();

    const wrapper = screen.getByTestId("page-content").parentElement;
    for (const className of [
      "flex",
      "w-full",
      "flex-col",
      "items-center",
      "responsive-px-5",
      "responsive-py-4",
    ]) {
      expect(wrapper?.classList.contains(className)).toBe(true);
    }
  });

  it("passes the image props to PageContent and always includes breadcrumbs", async () => {
    await renderDocs();

    const content = screen.getByTestId("page-content");
    expect(content.getAttribute("data-img-alt-text")).toBe(props.imgAltText);
    expect(content.getAttribute("data-img-url")).toBe(props.imgURL);
    expect(content.getAttribute("data-include-breadcrumbs")).toBe("true");
  });

  // MARK: Slot

  it("renders the default slot inside PageContent", async () => {
    await renderDocs();

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toBe("Docs article");
    expect(heading.parentElement).toBe(screen.getByTestId("page-content"));
  });

  it("renders the article with the docs image and breadcrumb width", async () => {
    const { container } = await renderDocs(false);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Docs article"
    );

    const image = screen.getByRole("img");
    expect(image.getAttribute("src")).toBe(
      "/icons/docs/bootstrap_file_text_light.png"
    );
    expect(image.getAttribute("alt")).toBe(
      "A graphic showing connected data nodes with the Scribe-Data logo over it connecting to data related icons."
    );

    const grid = container.querySelector(".grid");
    expect(grid?.classList.contains("w-11/12")).toBe(true);
  });
});
