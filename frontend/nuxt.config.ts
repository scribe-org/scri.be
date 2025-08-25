// SPDX-License-Identifier: AGPL-3.0-or-later
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

import head from "./head";
import locales from "./locales";
import modules from "./modules";

export default defineNuxtConfig({
  app: {
    head,
  },

  modules: modules,
  ssr: false,

  typescript: {
    // strict: true,
    // typeCheck: true,
  },

  devtools: {
    enabled: true,
  },

  alias: {
    "@": resolve(__dirname, "./"),
  },

  plugins: ["~/plugins/i18n-head.ts"],

  content: {
    watch: { enabled: false },
  },

  imports: {
    dirs: ["./stores"],
  },

  vite: {
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

  css: ["reduced-motion/css", "~/assets/css/changelog.css"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    lazy: true,
    strategy: "prefix_and_default",
    langDir: "./i18n",
    vueI18n: "./i18n.config.ts",
    baseUrl: "https://scri.be",
    locales,
    defaultLocale: "en",
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

  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-slide", "swiper-container"].includes(tag),
    },
  },

  hooks: {
    "app:resolve": (app) => {
      console.log("App instance resolved:", app);
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
