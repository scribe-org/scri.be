<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n._global.imprint") }}</Title>
    </Head>
    <PageDocs
      imgAltText="i18n.pages.docs._global.information_icon_img_alt_text"
      imgURL="/icons/docs/bootstrap_info_circle"
    >
      <PageBreadcrumbs />
      <h1 class="pb-2 font-bold">
        {{ $t("i18n._global.imprint") }}
      </h1>
      <p>
        {{ $t("i18n.pages.docs.legal.imprint.section_1_paragraph_1") }}
      </p>
      <p>
        {{ $t("i18n.pages.docs.legal.imprint.section_1_paragraph_2") }}
      </p>
      <ul>
        <li>
          <strong>{{ $t("i18n.pages.docs.legal.imprint.inquiries") }}</strong>
        </li>
        <li>
          <a class="link-text focus-brand" href="mailto:team@scri.be">
            team@scri.be
          </a>
        </li>
      </ul>
      <p class="pb-2 lg:pb-4">
        {{ $t("i18n.pages.docs.legal.imprint.message") }}
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
