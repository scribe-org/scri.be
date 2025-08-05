<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <Head>
      <Title>{{ $t("i18n._global.about_scribe") }}</Title>
    </Head>
    <div>
      <div class="responsive-py-4 responsive-px-5 flex-col space-y-3">
        <PageBreadcrumbs />
        <h1 class="transition-all duration-500">
          {{ $t("i18n._global.about_scribe") }}
        </h1>
      </div>
    </div>
    <div class="responsive-px-5 flex-col space-y-4 pb-10">
      <p>{{ $t("i18n.pages.docs._global.about_scribe_description") }}</p>
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
    url: "community",
    title: "i18n._global.our_community",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.COMMUNITY,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 1,
    url: "around-the-web",
    title: "i18n._global.around_the_web",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.WEB,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 2,
    url: "supporters-showcase",
    title: "i18n._global.supporters",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.HEART,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 3,
    url: "support-us",
    title: "i18n._global.support_scribe",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.SUPPORT,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 4,
    url: "imprint",
    title: "i18n._global.imprint",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.INFORMATION_CIRCLE,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
];
</script>
