<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n.pages._global.become_supporter") }}</Title>
    </Head>
    <PageDocs
      imgURL="/icons/docs/flaticon_support"
      imgAltText="i18n.pages.docs.about.support_us.join_img_alt_text"
    >
      <PageBreadcrumbs />
      <h1 class="font-bold">
        {{ $t("i18n.pages._global.become_supporter") }}
      </h1>
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
