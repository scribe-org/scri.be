// SPDX-License-Identifier: AGPL-3.0-or-later
import { screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import ImageLogo from "../../../app/components/image/ImageLogo.vue";
import render from "../../render";

describe("ImageLogo", () => {
  it("renders link with href, target, and styling classes", async () => {
    const { container } = await render(ImageLogo, {
      props: {
        imageLink: "https://wikimediafoundation.org",
      },
    });

    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toBe("https://wikimediafoundation.org");
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.classList.contains("focus-brand")).toBe(true);
    expect(link?.classList.contains("group")).toBe(true);
  });

  it("renders WikimediaFoundation logo and alt text", async () => {
    const { container } = await render(ImageLogo, {
      props: {
        imageLink: "https://wikimediafoundation.org",
        imageName: "WikimediaFoundation",
      },
    });

    const srText = screen.getByText("Wikimedia Foundation");
    expect(srText.classList.contains("sr-only")).toBe(true);
    expect(screen.queryByText("Wikimedia Deutschland")).toBeNull();

    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
  });

  it("renders WikimediaDeutschland logo and alt text", async () => {
    const { container } = await render(ImageLogo, {
      props: {
        imageLink: "https://www.wikimedia.de",
        imageName: "WikimediaDeutschland",
      },
    });

    const srText = screen.getByText("Wikimedia Deutschland");
    expect(srText.classList.contains("sr-only")).toBe(true);
    expect(screen.queryByText("Wikimedia Foundation")).toBeNull();

    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
  });

  it("does not render logo when imageName is undefined or unknown", async () => {
    const { container } = await render(ImageLogo, {
      props: {
        imageLink: "https://example.com",
        imageName: "UnknownLogo",
      },
    });

    expect(screen.queryByText("Wikimedia Foundation")).toBeNull();
    expect(screen.queryByText("Wikimedia Deutschland")).toBeNull();
    expect(container.querySelector("svg")).toBeNull();
  });

  it("applies dimension and theme adjustment styling classes", async () => {
    const { container } = await render(ImageLogo, {
      props: {
        imageName: "WikimediaFoundation",
      },
    });

    const wrapper = container.querySelector(".bg-layer-1");
    expect(wrapper).not.toBeNull();
    expect(wrapper?.classList.contains("size-[200px]")).toBe(true);
    expect(wrapper?.classList.contains("lg:size-[250px]")).toBe(true);
    expect(wrapper?.classList.contains("group-hover:bg-highlight")).toBe(true);
    expect(wrapper?.classList.contains("group-hover:fill-primary-text")).toBe(
      true
    );
  });
});
