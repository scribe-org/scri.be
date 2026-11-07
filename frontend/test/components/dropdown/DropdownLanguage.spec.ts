// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { fireEvent, screen } from "@testing-library/vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ref } from "vue";

import DropdownLanguage from "../../../app/components/dropdown/DropdownLanguage.vue";
import render from "../../render";

declare module "vue-i18n" {
  interface ComposerCustom {
    locales: import("vue").Ref<import("@nuxtjs/i18n").LocaleObject[]>;
  }
}

const mockLocales = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

const { mockSwitchLocalePath } = vi.hoisted(() => ({
  mockSwitchLocalePath: vi.fn((code: string) => `/${code}/test`),
}));

mockNuxtImport("useSwitchLocalePath", () => () => mockSwitchLocalePath);
mockNuxtImport("useI18n", () => () => ({
  locale: ref("en"),
  locales: ref(mockLocales),
  t: (k: string) => globalThis.useI18n().t(k),
}));

describe("DropdownLanguage", () => {
  beforeEach(() => {
    mockSwitchLocalePath.mockClear();
  });

  const nuxtLinkStub = {
    template: '<a data-testid="locale-link" :to="to"><slot /></a>',
    props: ["to"],
  };

  it("renders trigger button with current locale and aria-label", async () => {
    await render(DropdownLanguage, {
      global: {
        stubs: {
          NuxtLink: nuxtLinkStub,
        },
      },
    });

    const trigger = screen.getByRole("button", {
      name: /open the dropdown to select another language/i,
    });
    expect(trigger).toBeDefined();
    expect(trigger.textContent).toContain("en");
  });

  it("renders available locales excluding current locale", async () => {
    await render(DropdownLanguage, {
      global: {
        stubs: {
          NuxtLink: nuxtLinkStub,
        },
      },
    });

    const trigger = screen.getByRole("button", {
      name: /open the dropdown to select another language/i,
    });
    await fireEvent.click(trigger);

    const links = screen.getAllByTestId("locale-link");
    expect(links).toHaveLength(2);

    expect(mockSwitchLocalePath).toHaveBeenCalledWith("es");
    expect(mockSwitchLocalePath).toHaveBeenCalledWith("fr");
    expect(mockSwitchLocalePath).not.toHaveBeenCalledWith("en");

    expect(screen.getByText("Español")).toBeDefined();
    expect(screen.getByText("Français")).toBeDefined();
    expect(screen.queryByText("English")).toBeNull();
  });
});
