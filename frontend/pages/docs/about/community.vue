<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <Head>
    <Title>{{ $t("i18n._global.our_community") }}</Title>
  </Head>
  <PageDocs
    imgURL="/icons/docs/bootstrap_people"
    imgAltText="i18n.pages.docs.about._global.people_img_alt_text"
  >
    <PageBreadcrumbs />
    <h1 class="pb-2 font-bold">
      {{ $t("i18n._global.our_community") }}
    </h1>
    <p>{{ $t("i18n.pages.docs._global.lorem_ipsum_page_text") }}</p>
    <p class="space-x-1">
      {{ $t("i18n.pages.docs.about.community.section_2_1_paragraph_1_1") }}
      <a
        class="focus-brand link-text"
        href="https://github.com/scribe-org/"
        target="_blank"
      >
        {{ $t("i18n.pages.docs.about.community.section_2_1_paragraph_1_2") }}
        <Icon
          name="bi:box-arrow-up-right"
          size="1em"
          style="vertical-align: baseline"
        />
      </a>
      <Icon :name="IconMap.HEART" size="1em" style="vertical-align: baseline" />
    </p>
    <GridGitHubContributors />
    <PageCommunityFooter>
      <BtnRouteInternal
        class="w-full"
        :cta="true"
        label="i18n.pages.docs._global.return_to_docs_home"
        linkTo="/"
        fontSize="lg"
        ariaLabel="i18n.pages.docs._global.return_to_docs_home_aria_label"
      />
    </PageCommunityFooter>
  </PageDocs>
</template>

<script setup lang="ts">
import { IconMap } from "~/types/icon-map";
</script>
