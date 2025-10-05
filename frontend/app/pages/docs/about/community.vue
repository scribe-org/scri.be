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
    <p>{{ $t("i18n.pages.docs.about.community.description") }}</p>
    <h2 class="pt-4">
      {{ $t("i18n.pages.docs.about.community.open_source_developers") }}
    </h2>
    <p class="space-x-1">
      {{ $t("i18n.pages.docs.about.community.contributor_thank_you") }}
      <a
        class="link-text focus-brand"
        href="https://github.com/scribe-org/"
        target="_blank"
      >
        {{ $t("i18n.pages.docs.about.community.github_contributors") }}
        <Icon
          name="bi:box-arrow-up-right"
          size="1em"
          style="vertical-align: baseline"
        />
      </a>
      <Icon :name="IconMap.HEART" size="1em" style="vertical-align: baseline" />
    </p>
    <GridGitHubContributors />
    <h2 class="pt-4">
      {{ $t("i18n.pages.docs.about.community.open_design_professionals") }}
    </h2>
    <p>
      {{ $t("i18n.pages.docs.about.community.open_design_description") }}
      <a class="link-text" href="https://opensourcedesign.net/">
        opensourcedesign.net
      </a>
      .
    </p>
    <h2 class="pt-4">
      {{ $t("i18n.pages.docs.about.community.localization_specialist") }}
    </h2>
    <p>
      {{ $t("i18n.pages.docs.about.community.localization_description") }}
      <a class="link-text" href="https://hosted.weblate.org/projects/scribe/">
        weblate.org/projects/scribe
      </a>
      .
    </p>
    <PageCommunityFooter class="pt-4">
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
