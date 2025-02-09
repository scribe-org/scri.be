// SPDX-License-Identifier: AGPL-3.0-or-later
import type { NuxtModule } from "@nuxt/schema";

const modules: (string | [string, Record<string, object>] | NuxtModule)[] = [
  "@nuxt/content",
  "nuxt-icon",
  "@nuxtjs/color-mode",
  "@nuxtjs/device",
  "@nuxt/devtools",
  "@nuxt/eslint",
  "@nuxtjs/i18n",
  "@nuxtjs/plausible",
  "@nuxtjs/tailwindcss",
];

export default modules;
