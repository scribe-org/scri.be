<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <Head>
      <Title>{{ $t("i18n.pages.docs.index.scribe_documentation") }}</Title>
    </Head>
    <div>
      <div class="responsive-py-4 responsive-px-5 flex-col space-y-3">
        <PageBreadcrumbs />
        <h1 class="transition-all duration-500">
          {{ $t("i18n.pages.docs.index.scribe_documentation") }}
        </h1>
      </div>
    </div>
    <div class="responsive-px-5 flex-col space-y-4 pb-10">
      <p>{{ $t("i18n.pages.docs.index.docs_description") }}</p>
      <GridDocEntries class="responsive-py-1" :cards="cards" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DocsEntry } from "~/types/docs-entry";

import { IconMap } from "~/types/icon-map";

const cards: DocsEntry[] = [
  {
    id: 0,
    url: "keyboard-apps",
    title: "i18n._global.keyboard_apps",
    description: "i18n.pages.docs._global.keyboard_apps_description",
    iconURL: IconMap.KEYBOARD,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 1,
    url: "conjugate",
    title: "i18n._global.conjugate_apps",
    description: "i18n.pages.docs._global.conjugate_apps_description",
    iconURL: IconMap.CONJUGATE,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 2,
    url: "data",
    title: "i18n._global.data_extraction",
    description: "i18n.pages.docs._global.data_extraction_description",
    iconURL: IconMap.DATA_PACK,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 3,
    url: "server",
    title: "i18n._global.data_server",
    description: "i18n.pages.docs._global.data_server_description",
    iconURL: IconMap.SERVER,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 4,
    url: "about",
    title: "i18n._global.about_scribe",
    description: "i18n.pages.docs._global.about_scribe_description",
    iconURL: IconMap.SCRIBE,
    iconSize: "3.5em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 5,
    url: "legal",
    title: "i18n._global.legal",
    description: "i18n.pages.docs._global.legal_description",
    iconURL: IconMap.LEGAL,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
];
</script>
