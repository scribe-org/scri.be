<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <Head>
      <Title>{{ $t("i18n.pages.docs.index.scribe_documentation") }}</Title>
    </Head>
    <div>
      <div class="responsive-py-4 responsive-px-5 flex">
        <h1 class="transition-all duration-500">
          {{ $t("i18n.pages.docs.index.scribe_documentation") }}
        </h1>
      </div>
    </div>
    <div class="responsive-py-5 responsive-px-5">
      <GridDocEntries class="responsive-py-1" :cards="cards" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DocsEntry } from "~/types/docs-entry";

const cards: DocsEntry[] = [
  {
    id: 1,
    url: "language-keyboards",
    title: "i18n.pages.docs.index.content_page",
    description: "i18n.pages.docs.index.content_page_description",
    imgURL: "/images/content_pages/art/content_page",
    imgDimensions: "h-20 sm:h-24",
    imgAltText: "i18n.pages.docs.index.content_page_img_alt_text",
  },
  {
    id: 2,
    url: "conjugate",
    title: "i18n.pages.docs.index.content_page",
    description: "i18n.pages.docs.index.content_page_description",
    imgURL: "/images/content_pages/art/content_page",
    imgDimensions: "h-16 sm:h-20",
    imgAltText: "i18n.pages.docs.index.content_page_img_alt_text",
  },
  {
    id: 3,
    url: "data",
    title: "i18n.pages.docs.index.content_page",
    description: "i18n.pages.docs.index.content_page_description",
    imgURL: "/images/content_pages/art/content_page",
    imgDimensions: "h-16 sm:h-20",
    imgAltText: "i18n.pages.docs.index.content_page_img_alt_text",
  },
];
</script>
