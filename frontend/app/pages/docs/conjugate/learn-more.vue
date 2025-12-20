<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>
        {{ $t("i18n.pages._global.conjugation_apps") }}
      </Title>
    </Head>
    <PageDocs
      imgAltText="i18n.pages._global.conjugate_img_alt_text"
      imgURL="/images/landing/conjugate"
    >
      <PageBreadcrumbs />
      <h1 class="pb-2 font-bold">
        {{ $t("i18n.pages._global.conjugation_apps") }}
      </h1>
      <p>
        {{ $t("i18n.pages.docs.conjugate.learn_more.intro_paragraph") }}
      </p>
      <p class="mt-4">
        {{ $t("i18n.pages.docs.conjugate.learn_more.benefits_paragraph") }}
      </p>
      <h2 class="mb-2 mt-8 text-lg font-semibold">
        {{ $t("i18n.pages.docs._global.learn_more.key_features") }}:
      </h2>
      <ul class="list-disc space-y-2 pl-6">
        <li>{{ $t("i18n.pages.docs.conjugate.learn_more.feature_1") }}</li>
        <li>{{ $t("i18n.pages.docs.conjugate.learn_more.feature_2") }}</li>
        <li>{{ $t("i18n.pages.docs.conjugate.learn_more.feature_3") }}</li>
        <li>{{ $t("i18n.pages.docs.conjugate.learn_more.feature_4") }}</li>
        <li>{{ $t("i18n.pages.docs.conjugate.learn_more.feature_5") }}</li>
      </ul>
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
