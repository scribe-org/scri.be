<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n._global.privacy_policy") }}</Title>
    </Head>
    <PageDocs
      imgURL="/icons/docs/bootstrap_shield_check"
      imgAltText="i18n.pages.legal._global.privacy_policy_alt_text"
    >
      <PageBreadcrumbs />
      <h1 class="pb-2 font-bold">
        {{ $t("i18n._global.privacy_policy") }}
      </h1>
      <h4 class="text-light-distinct-text dark:text-dark-distinct-text">
        {{ $t("i18n.pages.docs.legal._global.last_updated") }}
      </h4>
      <p>{{ $t("i18n.pages.docs._global.lorem_ipsum_page_text") }}</p>
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
  </div>
</template>
