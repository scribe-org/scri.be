<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="bg-light-layer-0 text-light-text dark:bg-dark-layer-0 dark:text-dark-text"
  >
    <Head>
      <Title>
        {{ $t("i18n.pages._global.language_keyboards") }}
      </Title>
    </Head>
    <div
      class="responsive-py-4 responsive-px-5 flex w-full flex-col items-center"
    >
      <div class="w-10/12 gap-16 md:w-full 2xl:grid 2xl:grid-cols-2">
        <div
          class="items-center space-y-4 text-left md:items-start 2xl:col-span-1 2xl:row-start-1"
        >
          <PageBreadcrumbs />
          <h1 class="pb-2 font-bold">
            {{ $t("i18n.pages._global.language_keyboards") }}
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
        </div>
      </div>
    </div>
  </div>
</template>
