// SPDX-License-Identifier: AGPL-3.0-or-later
// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

import head from "./head";
import modules from "./modules";
import locales from "./shared/utils/locales";

export default defineNuxtConfig({
  app: {
    head,
  },

  modules: modules,

  ssr: false,

  devtools: {
    enabled: true,
  },

  plugins: ["~/plugins/i18n-head.ts"],

  content: {
    watch: { enabled: false },
  },

  imports: {
    dirs: ["./stores"],
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        ignored: [
          "**/test/**",
          "**/test-e2e/**",
          "**/test-results/**",
          "**/frontend/test-results/**",
          "**/frontend/test-results/accessibility-results/**",
        ],
      },
    },
  },

  colorMode: {
    classSuffix: "",
  },

  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/changelog.css",
    "reduced-motion/css",
  ],

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  i18n: {
    strategy: "prefix_and_default",
    restructureDir: "./",
    langDir: "./Scribe-i18n/i18n/locales",
    vueI18n: "./i18n.config.ts",
    baseUrl: "https://scri.be",
    defaultLocale: "en",
    locales,
    customRoutes: "config",
    pages: {},
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: "root",
    },
  },

  components: [
    {
      path: "~/components",
      global: true,
    },
  ],

  hooks: {
    "app:resolve": (_app) => {
      // Note: For future implementation.
    },
  },

  nitro: {
    preset: "netlify-static",
  },

  plausible: {
    // Prevent tracking on localhost.
    ignoredHostnames: ["localhost"],
  },
});
