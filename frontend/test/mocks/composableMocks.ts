// SPDX-License-Identifier: AGPL-3.0-or-later
/**
 * Factory functions for creating composable mocks in tests.
 *
 * These factories allow tests to explicitly define their mock needs using
 * reusable functions. This makes test dependencies clear and maintainable.
 */

import type { Composer } from "vue-i18n";

import { vi } from "vitest";

// MARK: I18n

/**
 * Creates a mock for useI18n composable.
 * Note: Most tests should use the default from setup.ts which provides the real i18n instance.
 * Only use this if you need a completely custom i18n mock.
 * @param composer - I18n composer instance (optional)
 */
export function createUseI18nMock(composer?: Composer) {
  return () => composer || ({} as Composer);
}

// MARK: Route & Navigation

/**
 * Creates a mock for useRoute composable.
 * @param params - Route parameters (default: {})
 * @param query - Query parameters (default: {})
 * @param path - Route path (default: "/")
 * @param name - Route name (optional)
 */
export function createUseRouteMock(
  params: Record<string, unknown> = {},
  query: Record<string, unknown> = {},
  path = "/",
  name?: string
) {
  return () => ({
    params,
    query,
    path,
    name,
  });
}

/**
 * Creates a useRoute mock that reads from a mutable route object at call time.
 * Use when tests mutate route.query before mount and need the component to see the updated values.
 *
 * @param mockRoute - Route object { path, query, name? }; tests mutate mockRoute.query before mount
 */
export function createUseRouteMockWithMutableQuery(mockRoute: {
  path: string;
  query: Record<string, unknown>;
  name?: string;
}) {
  return () => ({
    params: {},
    query: mockRoute.query,
    path: mockRoute.path,
    name: mockRoute.name,
  });
}

/**
 * Creates a mock for useRouter composable.
 * @param push - Router push function (default: vi.fn())
 * @param currentRoute - Current route value (default: { name: "home" })
 */
export function createUseRouterMock(
  push = vi.fn(),
  currentRoute = { value: { name: "home" } }
) {
  return () => ({
    push,
    currentRoute,
  });
}

/**
 * Creates a mock for useLocalePath composable.
 * @param prefix - Locale prefix to prepend (default: "/en")
 */
export function createUseLocalePathMock(prefix = "/en") {
  return () => (path: string) => `${prefix}${path}`;
}

// MARK: Device & Viewport

/**
 * Creates a mock for useDevice composable.
 * @param isMobile - Whether device is mobile (default: false)
 * @param isTablet - Whether device is tablet (default: false)
 * @param isDesktop - Whether device is desktop (default: true)
 */
export function createUseDeviceMock(
  isMobile = false,
  isTablet = false,
  isDesktop = true
) {
  return () => ({
    isMobile,
    isTablet,
    isDesktop,
  });
}

// MARK: Storage

/**
 * Creates a mock for useLocalStorage composable.
 * @param defaultValue - Default value to return (default: null)
 */
export function createUseLocalStorageMock<T>(defaultValue: T) {
  return (_key: string, _defaultValue: T) => ({
    value: defaultValue,
  });
}

// MARK: Utilities

/**
 * Creates a mock for useDebounceFn composable.
 * By default, returns the function unchanged (no debouncing in tests).
 */
export function createUseDebounceFnMock() {
  return <T extends (...args: unknown[]) => unknown>(fn: T, _delay: number) =>
    fn;
}

// MARK: Color Mode

/**
 * Creates a spy function for useColorMode composable.
 * Returns a vi.fn() that can be configured with mockImplementation().
 * @param preference - Color preference (default: "dark")
 * @param value - Current color value (default: "dark")
 */
export function createUseColorModeSpy(
  preference: "dark" | "light" = "dark",
  value: "dark" | "light" = "dark"
) {
  return vi.fn(() => ({
    preference,
    value,
  }));
}

// MARK: Sidebar

/**
 * Creates a spy function for useSidebar composable.
 * Returns a vi.fn() that can be configured with mockImplementation().
 * @param collapsed - Whether sidebar is collapsed (default: false)
 * @param collapsedSwitch - Whether toggle switch is in collapsed mode (default: false)
 */
export function createUseSidebarSpy(
  collapsed = false,
  collapsedSwitch = false
) {
  return vi.fn(() => ({
    collapsed,
    collapsedSwitch,
  }));
}
