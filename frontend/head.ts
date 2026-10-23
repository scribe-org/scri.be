// SPDX-License-Identifier: AGPL-3.0-or-later
import type { NuxtConfig } from "nuxt/schema";

type AppHead = NonNullable<NuxtConfig["app"]>["head"];

const head: AppHead = {
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  title: "scri.be",
  meta: [
    {
      name: "description",
      content:
        "Open-source community with apps to help language learners communicate with confidence.",
    },
    { property: "og:site_name", content: "scri.be" },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://scri.be",
    },
    {
      property: "og:title",
      content: "scri.be",
    },
    {
      property: "og:description",
      content: "Open-source language solutions.",
    },
    {
      property: "og:image",
      content: "/images/Scribe/ScribeOpenGraphImage.png",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:site", content: "@scribe_org" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://scri.be",
    },
    {
      name: "twitter:title",
      content: "scri.be",
    },
    {
      name: "twitter:description",
      content: "Open-source language solutions.",
    },
    {
      name: "twitter:image",
      content: "/images/Scribe/ScribeTwitterOpenGraphImage.png",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/icons/favicons/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/icons/favicons/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/icons/favicons/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/favicons/favicon-apple-touch.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/icons/favicons/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      href: "/icons/favicons/android-chrome-512x512.png",
    },
    {
      rel: "canonical",
      href: "https://scri.be",
    },
  ],
};

export default head;
