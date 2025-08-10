<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <Head>
    <Title>{{ $t("i18n._global.data_server") }}</Title>
  </Head>
  <div>
    <div class="responsive-py-4 responsive-px-5 flex-col space-y-3">
      <PageBreadcrumbs />
      <h1 class="transition-all duration-500">
        {{ $t("i18n._global.data_server") }}
      </h1>
    </div>
  </div>
  <div class="responsive-px-5 flex-col space-y-4 pb-10">
    <p>{{ $t("i18n.pages.docs._global.data_server_description") }}</p>
    <GridDocEntries class="responsive-py-1" :cards="cards" />
  </div>
</template>

<script setup lang="ts">
import type { DocsEntry } from "~/types/docs-entry";

import { IconMap } from "~/types/icon-map";

const cards: DocsEntry[] = [
  {
    id: 0,
    url: "learn-more",
    title: "i18n._global.learn_more",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.INFORMATION_CIRCLE,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 1,
    url: "available-data",
    title: "i18n._global.available_data",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.DATA_AVAILABLE,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 2,
    url: "changelog",
    title: "i18n._global.changelog",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.CHANGELOG,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
];
</script>
