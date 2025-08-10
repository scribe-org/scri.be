<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n.pages._global.our_supporters") }}</Title>
    </Head>
    <PageDocs
      imgURL="/icons/docs/bootstrap_heart"
      imgAltText="i18n.pages.docs.about._global.people_img_alt_text"
    >
      <PageBreadcrumbs />
      <h1 class="font-bold">
        {{ $t("i18n.pages._global.our_supporters") }}
      </h1>
      <p class="pt-2 lg:pt-4 xl:pt-6">
        {{ $t("i18n.pages.docs._global.lorem_ipsum_page_text") }}
      </p>
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
    </PageDocs>
  </div>
</template>
