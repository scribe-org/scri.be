<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <Head>
    <Title>{{ $t("i18n._global.conjugate_apps") }}</Title>
  </Head>
  <div>
    <div class="responsive-py-4 responsive-px-5 flex-col space-y-3">
      <PageBreadcrumbs />
      <h1 class="transition-all duration-500">
        {{ $t("i18n._global.conjugate_apps") }}
      </h1>
    </div>
  </div>
  <div class="responsive-px-5 flex-col space-y-4 pb-10">
    <p>{{ $t("i18n.pages.docs._global.conjugate_apps_description") }}</p>
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
    imgAltText: "i18n.pages.docs._global.imprint_img_alt_text",
  },
  {
    id: 1,
    url: "android-changelog",
    title: "i18n._global.android_changelog",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.CHANGELOG,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.changelog.file_code_img_alt_text",
  },
  {
    id: 2,
    url: "ios-changelog",
    title: "i18n._global.ios_changelog",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.CHANGELOG,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.changelog.file_code_img_alt_text",
  },
];
</script>
