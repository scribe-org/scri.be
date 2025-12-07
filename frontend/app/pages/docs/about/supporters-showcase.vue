<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n.pages._global.our_supporters") }}</Title>
    </Head>
    <PageDocs
      imgAltText="i18n.pages.docs.about._global.heart_img_alt_text"
      imgURL="/icons/docs/bootstrap_heart"
    >
      <PageBreadcrumbs />
      <h1 class="font-bold">
        {{ $t("i18n.pages._global.our_supporters") }}
      </h1>
      <p class="pt-2 lg:pt-4 xl:pt-6">
        {{
          $t(
            "i18n.pages.docs.about.supporters_showcase.section_1_paragraph_1_1"
          )
        }}
        <NuxtLink
          class="link-text focus-brand"
          :to="localePath('/docs/about/support-us')"
        >
          {{ $t("i18n._global.support_scribe") }}
        </NuxtLink>
        .
      </p>
      <h2 class="responsive-py-1 font-bold responsive-h3">
        {{ $t("i18n.pages._global.contributors") }}
      </h2>
      <h3 class="font-bold responsive-h4">
        {{
          $t("i18n.pages.docs.about.supporters_showcase.section_2_1_subheader")
        }}
      </h3>
      <p class="space-x-1">
        {{
          $t(
            "i18n.pages.docs.about.supporters_showcase.section_2_1_paragraph_1_1"
          )
        }}
        💙
      </p>
      <GridGitHubContributors />
      <h3 class="pt-4 font-bold responsive-h4">
        {{
          $t("i18n.pages.docs.about.supporters_showcase.section_2_2_subheader")
        }}
      </h3>
      <p>
        {{
          $t(
            "i18n.pages.docs.about.supporters_showcase.section_2_2_paragraph_1"
          )
        }}
      </p>
      <!-- <ul class="py-4 pl-4 space-y-2"></ul> -->
      <p class="text-light-special-text dark:text-dark-special-text">
        {{ $t("i18n.pages.docs.about.supporters_showcase.section_2_2_thanks") }}
      </p>
      <h2 class="responsive-py-1 font-bold responsive-h3">
        {{
          $t("i18n.pages.docs.about.supporters_showcase.section_3_subheader")
        }}
      </h2>
      <p>
        {{
          $t(
            "i18n.pages.docs.about.supporters_showcase.section_3_paragraph_1_1"
          )
        }}
      </p>
      <div
        class="flex items-center justify-center pb-6 md:justify-start xl:pb-8"
      >
        <GridSupporters class="mt-6 xl:mt-8" />
      </div>
      <PageCommunityFooter>
        <BtnRouteInternal
          ariaLabel="i18n.pages.docs._global.return_to_docs_home_aria_label"
          class="w-full"
          :cta="true"
          fontSize="lg"
          label="i18n.pages.docs._global.return_to_docs_home"
          linkTo="/"
        />
      </PageCommunityFooter>
    </PageDocs>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
