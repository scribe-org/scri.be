<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <Head>
    <Title>{{ $t("i18n._global.blog_posts") }}</Title>
  </Head>
  <PageDocs
    imgURL="/icons/docs/bootstrap_file_text"
    imgAltText="i18n.pages.docs.about.blog_posts.file_text_img_alt_text"
  >
    <PageBreadcrumbs />
    <h1 class="pb-2 font-bold">
      {{ $t("i18n._global.blog_posts") }}
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
</template>
