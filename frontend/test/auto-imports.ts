// SPDX-License-Identifier: AGPL-3.0-or-later
/**
 * Auto-import mock generator for Vitest tests
 *
 * Dynamically reads .nuxt/imports.d.ts and provides default mocks
 * for all use* composables that aren't already mocked.
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Extracts all use* composable names from .nuxt/imports.d.ts.
 */
function extractComposableNames(importsContent: string): Set<string> {
  const composables = new Set<string>();

  const exportPattern = /export\s+{\s*([^}]+)\s*}\s+from/g;
  let match;

  while ((match = exportPattern.exec(importsContent)) !== null) {
    const exports = match[1];
    if (!exports) {
      continue;
    }
    const functions = exports
      .split(",")
      .map((f) => f.trim())
      .filter((f) => /^use[A-Z]/.test(f))
      .map((f) => {
        const parts = f.split(/\s+as\s+/);
        return parts[0]?.trim() ?? "";
      })
      .filter((f) => f.length > 0);

    functions.forEach((fn) => composables.add(fn));
  }

  return composables;
}

/**
 * Default mock factory for composables.
 */
function createDefaultMock(): () => Record<string, unknown> {
  return () => ({});
}

const EXCLUDED_COMPOSABLES = new Set(["useNuxtApp", "tryUseNuxtApp"]);

/**
 * Sets up default mocks for all auto-imported composables that don't already have mocks.
 */
export function setupAutoImportMocks(): void {
  const importsFile = join(__dirname, "..", ".nuxt", "imports.d.ts");

  if (!existsSync(importsFile)) {
    return;
  }

  try {
    const importsContent = readFileSync(importsFile, "utf-8");
    const composables = extractComposableNames(importsContent);
    for (const composable of composables) {
      if (EXCLUDED_COMPOSABLES.has(composable)) {
        continue;
      }
      if (!(composable in globalThis)) {
        (globalThis as Record<string, unknown>)[composable] =
          createDefaultMock();
      }
    }
  } catch {
    // Fail silently if file can't be read or parsed.
  }
}
