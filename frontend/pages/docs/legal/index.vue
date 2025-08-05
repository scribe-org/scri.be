<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <Head>
      <Title>{{ $t("i18n._global.legal") }}</Title>
    </Head>
    <div>
      <div class="responsive-py-4 responsive-px-5 flex-col space-y-3">
        <PageBreadcrumbs />
        <h1 class="transition-all duration-500">
          {{ $t("i18n._global.legal") }}
        </h1>
      </div>
    </div>
    <div class="responsive-px-5 flex-col space-y-4 pb-10">
      <p>{{ $t("i18n.pages.docs._global.legal_description") }}</p>
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
    url: "privacy-policy",
    title: "i18n._global.privacy_policy",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.PRIVACY_POLICY,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
  {
    id: 1,
    url: "trademark-policy",
    title: "i18n._global.trademark_policy",
    description: "i18n.pages.docs._global.index.content_page_description",
    iconURL: IconMap.TRADEMARK,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs._global.content_page_img_alt_text",
  },
];
</script>
