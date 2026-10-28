// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { describe, expect, it, vi } from "vitest";

import useColorModeImages from "../../app/composables/useColorModeImages";

const { useColorModeMock } = vi.hoisted(() => ({
  useColorModeMock: vi.fn(() => ({
    preference: "dark",
    value: "dark",
  })),
}));

mockNuxtImport("useColorMode", () => useColorModeMock);

describe("useColorModeImages", () => {
  it("adds _light to image path", () => {
    useColorModeMock.mockReturnValue({
      preference: "light",
      value: "light",
    });

    const getColorModeImages = useColorModeImages();
    expect(getColorModeImages("/path/to/image", ".png")).toBe(
      "/path/to/image_light.png"
    );
  });

  it("adds _dark to image path", () => {
    useColorModeMock.mockReturnValue({
      preference: "dark",
      value: "dark",
    });

    const getColorModeImages = useColorModeImages();
    expect(getColorModeImages("/path/to/image", ".png")).toBe(
      "/path/to/image_dark.png"
    );
  });

  it("uses .png as default extension", () => {
    useColorModeMock.mockReturnValue({
      preference: "light",
      value: "light",
    });

    const getColorModeImages = useColorModeImages();
    expect(getColorModeImages("/path/to/image")).toBe(
      "/path/to/image_light.png"
    );
  });

  it("supports custom file extensions", () => {
    useColorModeMock.mockReturnValue({
      preference: "dark",
      value: "dark",
    });

    const getColorModeImages = useColorModeImages();
    expect(getColorModeImages("/path/to/image", ".svg")).toBe(
      "/path/to/image_dark.svg"
    );
  });
});
