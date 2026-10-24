// SPDX-License-Identifier: AGPL-3.0-or-later
import { config } from "@vue/test-utils";
import { createPinia, defineStore, setActivePinia } from "pinia";
import { afterEach, beforeEach, vi } from "vitest";
import { createI18n } from "vue-i18n";

import en from "../Scribe-i18n/i18n/locales/en-US.json" with { type: "json" };
import { setupAutoImportMocks } from "./auto-imports";

// Set up Pinia.
setActivePinia(createPinia());
globalThis.defineStore = defineStore;

// MARK: Infrastructure-Dependent Mocks Only

globalThis.useColorModeMock = vi.fn(() => ({
  preference: "dark" as const,
  value: "dark" as const,
}));
globalThis.useColorMode = () => globalThis.useColorModeMock();

globalThis.useSidebarMock = vi.fn(() => ({
  collapsed: false,
  collapsedSwitch: false,
  toggleCollapsed: vi.fn(),
  toggleCollapsedSwitch: vi.fn(),
}));
globalThis.useSidebar = () => globalThis.useSidebarMock();

vi.mock("~/stores/sidebar", () => ({
  useSidebar: globalThis.useSidebar,
}));

// Auto-import default mocks
setupAutoImportMocks();

// Set up I18n.
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: Object.assign({ en, "en-US": en }),
  missingWarn: false,
  fallbackWarn: false,
});

config.global.plugins.push(i18n);
globalThis.useI18n = () => i18n.global;

const originalCreateObjectURL = URL.createObjectURL;
URL.createObjectURL = (obj: Blob | MediaSource) => {
  if (obj instanceof Blob || (obj as unknown) instanceof File) {
    return `blob:mock-${Math.random().toString(36).slice(2)}`;
  }
  return originalCreateObjectURL?.call(URL, obj) ?? "";
};

config.global.provide = {
  [Symbol.for("vue-i18n")]: i18n,
};
config.global.mocks = {
  ...(config.global.mocks ?? {}),
  t: (key: string) => i18n.global.t(key),
};

// MARK: Component Mocks
config.global.components = {
  Icon: {
    template: `<img role="img" :aria-label="getAriaLabel()" :style="computedStyle" v-bind="$attrs" />`,
    props: ["name", "size"],
    computed: {
      computedStyle(this: {
        $attrs: { style?: string | Record<string, string> };
        getAriaLabel: () => string;
      }) {
        let style = this.$attrs.style || {};
        if (typeof style === "string") {
          const colorMatch = style.match(/color:\s*([^;]+)/);
          style =
            colorMatch && colorMatch[1] ? { color: colorMatch[1].trim() } : {};
        }
        if (!style.color) {
          const ariaLabel = this.getAriaLabel();
          if (
            ariaLabel.includes("Error") ||
            ariaLabel.includes("do not match") ||
            ariaLabel.includes("failed")
          ) {
            style = { ...style, color: "#BA3D3B" };
          } else if (
            ariaLabel.includes("Success") ||
            ariaLabel.includes("match") ||
            ariaLabel.includes("passed")
          ) {
            style = { ...style, color: "#3BA55C" };
          }
        }
        return style;
      },
    },
    methods: {
      getAriaLabel(this: { name?: string }) {
        const iconMap: Record<string, string> = {
          "bi:x-circle-fill": "Password failed rule",
          "bi:check-circle-fill": "Password passed rule",
          "bi:exclamation-circle-fill": "Error: passwords do not match",
          "bi:check-circle": "Success: passwords match",
          "bi:x-lg": "Error: passwords do not match",
          "bi:check-lg": "Success: passwords match",
        };
        return (this.name && iconMap[this.name]) || this.name || "";
      },
    },
  },
};

// eslint-disable-next-line no-console
const originalWarn = console.warn;
// eslint-disable-next-line no-console
const originalError = console.error;

beforeEach(() => {
  // eslint-disable-next-line no-console
  console.warn = (...args: unknown[]) => {
    const message = String(args[0] || "");
    if (
      message.includes("Plugin has already been applied") ||
      message.includes("already been registered") ||
      message.includes('Directive "t" has already been registered')
    ) {
      return;
    }
    originalWarn(...args);
  };
  // eslint-disable-next-line no-console
  console.error = (...args: unknown[]) => {
    originalError(...args);
  };
});

afterEach(() => {
  // eslint-disable-next-line no-console
  console.warn = originalWarn;
  // eslint-disable-next-line no-console
  console.error = originalError;

  setActivePinia(createPinia());

  globalThis.useColorModeMock.mockReset();
  globalThis.useSidebarMock.mockReset();
});
