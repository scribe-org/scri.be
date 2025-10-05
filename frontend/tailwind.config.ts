// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

export default <Partial<Config>>{
  content: [
    "~/components/**/*.{js,vue,ts}",
    "~/layouts/**/*.vue",
    "~/pages/**/*.vue",
    "~/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // MARK: Style Utils

        ".elem-shadow-sm": {
          "@apply shadow-sm shadow-zinc-700": {},
        },

        // MARK: Focus Utils

        ".focus-brand": {
          "@apply rounded-sm focus:outline-none focus-visible:border-link-text focus-visible:ring-2 focus-visible:ring-link-text":
            {},
        },
        ".focus-inside": {
          "@apply rounded-sm focus-within:border-link-text focus-within:outline-none focus-within:ring-2 focus-within:ring-link-text":
            {},
        },

        // MARK: Text Utils

        ".responsive-h1": {
          "@apply font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl":
            {},
        },
        ".responsive-h2": {
          "@apply font-display text-xl sm:text-2xl md:text-3xl xl:text-4xl": {},
        },
        ".responsive-h3": {
          "@apply font-display text-lg sm:text-xl md:text-2xl xl:text-3xl": {},
        },
        ".responsive-h4": {
          "@apply font-display text-base sm:text-lg md:text-xl xl:text-2xl": {},
        },
        ".responsive-h5": {
          "@apply font-display text-base md:text-lg xl:text-xl": {},
        },
        ".responsive-h6": {
          "@apply font-display text-base xl:text-lg": {},
        },
      });
    }),
  ],
  theme: {
    extend: {
      // MARK: Fonts

      fontFamily: {
        sans: ["Red Hat Text"],
        display: ["Red Hat Display"],
      },

      // MARK: Breakpoints

      screens: {
        "3xl": "112rem",
      },

      // MARK: Color Derivation

      colors: {
        "layer-0": "rgba(var(--layer-0))",
        "layer-1": "rgba(var(--layer-1))",
        "primary-text": "rgba(var(--primary-text), 0.85)",
        "distinct-text": "rgba(var(--distinct-text), 0.65)",
        "section-div": "rgba(var(--section-div))",
        "link-text": "rgba(var(--link-text), 0.9)",
        "link-text-hover": "rgba(var(--link-text-hover), 0.9)",
        highlight: "rgba(var(--highlight))",
        "highlight-darker": "rgba(var(--highlight-darker))",
        "highlight-lighter": "rgba(var(--highlight-lighter))",
        "scribe-blue": "rgba(var(--scribe-blue))",
        "scribe-blue-lighter": "rgba(var(--scribe-blue-lighter))",
        "scribe-blue-darker": "rgba(var(--scribe-blue-darker))",
      },
    },
  },
};
