<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
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
</template>

<script setup lang="ts">
import type { DocsEntry } from "~/types/docs-entry";

import { IconMap } from "~/types/icon-map";

const cards: DocsEntry[] = [
  {
    id: 0,
    url: "community",
    title: "i18n._global.our_community",
    description: "i18n.pages.docs.about.index.our_community",
    iconURL: IconMap.COMMUNITY,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs.about._global.people_img_alt_text",
  },
  {
    id: 1,
    url: "blog-posts",
    title: "i18n._global.blog_posts",
    description: "i18n.pages.docs.about.index.blog_posts",
    iconURL: IconMap.BLOG_POST,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs.about._global.file_text_img_alt_text",
  },
  {
    id: 2,
    url: "supporters-showcase",
    title: "i18n._global.supporters",
    description: "i18n.pages.docs.about.index.supporters",
    iconURL: IconMap.HEART,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs.about._global.heart_img_alt_text",
  },
  {
    id: 3,
    url: "support-us",
    title: "i18n._global.support_scribe",
    description: "i18n.pages.docs.about.index.support_scribe",
    iconURL: IconMap.SUPPORT,
    iconSize: "3em",
    imgAltText: "i18n.pages.docs.about._global.support_img_alt_text",
  },
];
</script>
