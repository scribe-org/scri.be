<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>{{ $t("i18n.pages._global.become_supporter") }}</Title>
    </Head>
    <PageDocs
      imgURL="/icons/docs/join_icon"
      imgAltText="i18n.pages.docs.about.support_us.join_img_alt_text"
    >
      <h1 class="font-bold">
        {{ $t("i18n.pages._global.become_supporter") }}
      </h1>
      <p>{{ $t("i18n.pages.docs._global.lorem_ipsum_page_text") }}</p>
    </PageDocs>
  </div>
</template>
