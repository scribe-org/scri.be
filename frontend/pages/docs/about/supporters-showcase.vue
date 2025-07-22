<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n.pages._global.our_supporters") }}</Title>
    </Head>
    <div class="responsive-py-4 responsive-px-5 flex flex-col space-y-4">
      <PageBreadcrumbs />
      <h1 class="font-bold">
        {{ $t("i18n.pages._global.our_supporters") }}
      </h1>
      <p class="pt-2 lg:pt-4 xl:pt-6">
        {{ $t("i18n.pages.docs._global.lorem_ipsum_page_text") }}
      </p>
      <p class="space-x-1">
        {{
          $t(
            "i18n.pages.docs.about.supporters_showcase.section_2_1_paragraph_1_1"
          )
        }}
        <a
          class="focus-brand link-text"
          href="https://github.com/scribe-org/"
          target="_blank"
        >
          {{
            $t(
              "i18n.pages.docs.about.supporters_showcase.section_2_1_paragraph_1_2"
            )
          }}
          <Icon
            name="bi:box-arrow-up-right"
            size="1em"
            style="vertical-align: baseline"
          />
        </a>
        <Icon
          :name="IconMap.HEART"
          size="1em"
          style="vertical-align: baseline"
        />
      </p>
      <GridGitHubContributors />
      <div class="flex items-center justify-center pb-6 xl:pb-8">
        <GridSupporters class="mt-6 xl:mt-8" />
      </div>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconMap } from "~/types/icon-map";
</script>
