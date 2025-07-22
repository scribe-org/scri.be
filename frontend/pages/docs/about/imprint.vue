<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n._global.imprint") }}</Title>
    </Head>
    <PageDocs
      imgURL="/icons/docs/bootstrap_info_circle"
      imgAltText="i18n.pages.about._global.imprint_img_alt_text"
    >
      <h1 class="pb-2 font-bold">
        {{ $t("i18n._global.imprint") }}
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
