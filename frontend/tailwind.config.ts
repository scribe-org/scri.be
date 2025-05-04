// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })], // eslint-disable-line
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Text"],
        display: ["Red Hat Display"],
      },
      screens: {
        "3xl": "1792px",
      },
      colors: {
        "layer-0": "rgba(var(--layer-0))",
        "primary-text": "rgba(var(--primary-text), 0.85)",
        "distinct-text": "rgba(var(--distinct-text), 0.90)",
        "section-div": "rgba(var(--section-div))",
        "link-text": "rgba(var(--link-text), 0.9)",
        "link-text-hover": "rgba(var(--link-text-hover), 0.9)",
        highlight: "rgba(var(--highlight))",
        "scribe-blue": "rgba(var(--scribe-blue))",
        "scribe-blue-lighter": "rgba(var(--scribe-blue-lighter))",
        "scribe-blue-darker": "rgba(var(--scribe-blue-darker))",
      },
      transitionProperty: {
        width: "width",
        padding: "padding",
      },
    },
  },
};
