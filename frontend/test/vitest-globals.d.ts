// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Mock } from "vitest";
import type { Composer } from "vue-i18n";

export type FetchOptionsShape = Record<string, unknown>;
export type FetchFn = <T = unknown>(
  url: string,
  opts?: FetchOptionsShape
) => Promise<T>;
export type FetchRawFn = <T = unknown>(
  url: string,
  opts?: FetchOptionsShape
) => Promise<{
  _data: T;
  headers?: Headers;
  status?: number;
}>;
export interface FetchGlobal extends FetchFn {
  raw: FetchRawFn;
}

// These types are based on the mocks in `test/setup.ts`.
// Using 'var' declarations makes properties available both as top-level globals
// (e.g., useI18n()) AND as properties of globalThis (e.g., globalThis.useI18n),
// allowing direct access without type casts.
declare global {
  var defineStore: typeof import("pinia").defineStore;
  var useI18n: () => Composer;
  var useLocalePath: () => (path: string) => string;
  var useColorModeMock: Mock<() => { preference: string; value: string }>;
  var useColorMode: () => {
    preference: string;
    value: string;
  };
  var useSidebarMock: Mock<
    () => {
      collapsed: boolean;
      collapsedSwitch: boolean;
      toggleCollapsed: () => void;
      toggleCollapsedSwitch: () => void;
    }
  >;
  var useSidebar: () => {
    collapsed: boolean;
    collapsedSwitch: boolean;
    toggleCollapsed: () => void;
    toggleCollapsedSwitch: () => void;
  };
  var $fetch: FetchGlobal;
  var BASE_FRONTEND_URL: string;
}

export {};
