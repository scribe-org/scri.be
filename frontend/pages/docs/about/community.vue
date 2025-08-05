<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <Head>
      <Title>{{ $t("i18n._global.our_community") }}</Title>
    </Head>
    <PageDocs imgURL="image_url" imgAltText="image_alt_text">
      <PageBreadcrumbs />
      <h1 class="pb-2 font-bold">
        {{ $t("i18n._global.our_community") }}
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
