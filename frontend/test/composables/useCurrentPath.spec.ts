// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it, vi } from "vitest";
import { useRoute } from "vue-router";

import { useCurrentPath } from "../../app/composables/useCurrentPath";

vi.mock("vue-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("vue-router")>();
  return {
    ...actual,
    useRoute: vi.fn(),
  };
});

describe("useCurrentPath", () => {
  it("returns true when current route matches the given path", () => {
    vi.mocked(useRoute).mockReturnValue({
      path: "/docs/getting-started",
    } as ReturnType<typeof useRoute>);

    const { isCurrentPath } = useCurrentPath();
    expect(isCurrentPath("/docs/getting-started")).toBe(true);
  });

  it("returns false when current route does not match the given path", () => {
    vi.mocked(useRoute).mockReturnValue({
      path: "/docs/getting-started",
    } as ReturnType<typeof useRoute>);

    const { isCurrentPath } = useCurrentPath();
    expect(isCurrentPath("/about")).toBe(false);
  });
});
