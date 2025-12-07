<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n._global.privacy_policy") }}</Title>
    </Head>
    <PageDocs
      imgAltText="i18n.pages.docs.legal._global.privacy_policy_img_alt_text"
      imgURL="/icons/docs/bootstrap_shield_check"
    >
      <PageBreadcrumbs />
      <h1 class="pb-2 font-bold">
        {{ $t("i18n._global.privacy_policy") }}
      </h1>
      <h4 class="text-light-distinct-text dark:text-dark-distinct-text">
        {{ $t("i18n.pages.docs.legal._global.last_updated") }}
        <span
          class="text-light-special-text dark:text-dark-special-text responsive-h4"
        >
          {{ $t("i18n.pages.docs.legal._global.last_updated_date") }}
        </span>
      </h4>
      <p>
        <strong>
          {{ $t("i18n.pages.docs.legal._global.english_text_precedence") }}
        </strong>
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_1_paragraph_1") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_1_paragraph_2") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_1_paragraph_3") }}
      </p>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_2_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_2_paragraph_1") }}
      </p>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_3_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_3_paragraph_1") }}
      </p>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_4_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_4_paragraph_1") }}
      </p>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_5_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_5_paragraph_1") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_5_paragraph_2") }}
      </p>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_6_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_6_paragraph_1") }}
      </p>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_7_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.privacy_policy.section_7_paragraph_1") }}
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
