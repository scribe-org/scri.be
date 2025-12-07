<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n._global.trademark_policy") }}</Title>
    </Head>
    <PageDocs
      imgAltText="i18n.pages.docs.legal._global.trademark_policy_img_alt_text"
      imgURL="/icons/docs/bootstrap_trademark"
    >
      <PageBreadcrumbs />
      <h1 class="pb-2 font-bold">
        {{ $t("i18n._global.trademark_policy") }}
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
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_1_paragraph_1") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_1_paragraph_2") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_1_paragraph_3") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_1_paragraph_4") }}
      </p>
      <p>
        {{
          $t("i18n.pages.docs.legal.trademark_policy.section_1_paragraph_5_1")
        }}
        <a class="link-text focus-brand" href="mailto:team@scri.be">
          team@scri.be
        </a>
        .
        {{
          $t("i18n.pages.docs.legal.trademark_policy.section_1_paragraph_5_2")
        }}
      </p>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_2_subheader") }}
      </h2>
      <ul class="ml-6 list-disc">
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_1")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_2")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_3")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_4")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_5")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_6")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_7")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_2_list_1_item_8")
          }}
        </li>
      </ul>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_3_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_3_paragraph_1") }}
      </p>
      <ul class="ml-6 list-disc">
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_3_list_1_item_1")
          }}
        </li>
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_3_list_1_item_2")
          }}
        </li>
      </ul>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_4_subheader") }}
      </h2>
      <ul class="ml-6 list-disc">
        <li>
          {{
            $t("i18n.pages.docs.legal.trademark_policy.section_4_list_1_item_1")
          }}
        </li>
      </ul>
      <h2 class="font-bold responsive-h3">
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_5_subheader") }}
      </h2>
      <p>
        {{ $t("i18n.pages.docs.legal.trademark_policy.section_5_paragraph_1") }}
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
