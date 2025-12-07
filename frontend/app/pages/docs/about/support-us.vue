<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n.pages._global.become_supporter") }}</Title>
    </Head>
    <PageDocs
      imgAltText="i18n.pages.docs.about._global.support_img_alt_text"
      imgURL="/icons/docs/flaticon_support"
    >
      <PageBreadcrumbs />
      <h1 class="font-bold">
        {{ $t("i18n.pages._global.become_supporter") }}
      </h1>
      <p>
        {{ $t("i18n.pages.docs.about.support_us.section_1_paragraph_1_1") }}
        <NuxtLink
          class="link-text focus-brand"
          :to="localePath('/docs/about/supporters-showcase')"
        >
          {{ $t("i18n._global.supporters") }}
        </NuxtLink>
        .
      </p>
      <h2 class="font-bold responsive-h4">
        {{ $t("i18n.pages.docs.about.support_us.section_2_subheader") }}
      </h2>
      <h2 class="font-bold responsive-h4">
        {{ $t("i18n.pages.docs.about.support_us.section_3_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.about.support_us.section_3_paragraph_1_1") }}
      </p>
      <h2 class="font-bold responsive-h4">
        {{ $t("i18n.pages.docs.about.support_us.section_4_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.about.support_us.section_4_paragraph_1_1") }}
      </p>
      <h2 class="font-bold responsive-h4">
        {{ $t("i18n.pages.docs.about.support_us.section_5_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.about.support_us.section_5_paragraph_1_1") }}
        <NuxtLink
          class="link-text focus-brand"
          :to="localePath('/docs/about/supporters-showcase')"
        >
          {{ $t("i18n._global.supporters") }}
        </NuxtLink>
        .
      </p>
      <h2 class="font-bold responsive-h4">
        {{ $t("i18n.pages.docs.about.support_us.section_6_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.about.support_us.section_6_paragraph_1_1") }}
        <a
          class="link-text focus-brand"
          href="https://hosted.weblate.org/projects/scribe/"
          target="_blank"
        >
          {{ $t("i18n.pages.docs.about.support_us.section_6_paragraph_1_2") }}
          <Icon
            name="bi:box-arrow-up-right"
            size="1em"
            style="vertical-align: baseline"
          />
        </a>
      </p>
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
