<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="overflow-hidden bg-layer-0">
    <Head>
      <Title>{{ $t("i18n.pages.index.title") }}</Title>
    </Head>
    <LandingSplash />
    <LandingCommunityBanner />
    <div
      class="mb-2 mt-4 flex flex-col sm:mb-4 sm:mt-10 xl:mb-8 xl:mt-16 2xl:mb-12 2xl:mt-24"
    >
      <LandingContent
        contentPosition="left"
        header="i18n.pages._global.language_keyboards"
        tagline="i18n.pages.index.language_keyboards_tagline"
        text="i18n.pages.index.language_keyboards_text"
        :imgURL="LANGUAGE_KEYBOARDS_IMAGE_URL"
        imageAltText="i18n.pages._global.language_keyboards_img_alt_text"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/keyboard-apps/learn-more"
        btnAriaLabel1="i18n.pages.index.language_keyboards_aria_label"
        btnId1="btn-keyboard-apps"
      />
      <LandingContent
        contentPosition="right"
        header="i18n.pages.index.conjugate_header"
        tagline="i18n.pages.index.conjugate_tagline"
        text="i18n.pages.index.conjugate_text"
        :imgURL="CONJUGATE_IMAGE_URL"
        imageAltText="i18n.pages._global.conjugate_img_alt_text"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/conjugate/learn-more"
        btnAriaLabel1="i18n.pages.index.conjugate_aria_label"
        btnId1="btn-conjugate"
      />
      <LandingContent
        contentPosition="left"
        header="i18n._global.data_extraction"
        tagline="i18n.pages.index.data_tagline"
        text="i18n.pages.index.data_text"
        :imgURL="DATA_IMAGE_URL"
        imageAltText="i18n.pages._global.data_img_alt_text"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/data/learn-more"
        btnAriaLabel1="i18n.pages.index.data_aria_label"
        btnId1="btn-data"
      />
      <LandingContent
        contentPosition="right"
        header="i18n._global.data_server"
        tagline="i18n.pages.index.server_tagline"
        text="i18n.pages.index.server_text"
        :imgURL="SERVER_IMAGE_URL"
        imageAltText="i18n.pages._global.server_img_alt_text"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/server/learn-more"
        btnAriaLabel1="i18n.pages.index.server_aria_label"
        btnId1="btn-server"
      />
      <LandingTechBanner />
      <LandingContent
        contentPosition="left"
        header="i18n.pages.index.about_us"
        tagline="i18n.pages.index.scribe_section_tagline"
        text="i18n.pages.index.scribe_section_text"
        :imgURL="SCRIBE_COMMUNITY_IMAGE_URL"
        imageAltText="i18n.pages.index.scribe_community_img_alt_text"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/about/community"
        btnAriaLabel1="i18n.pages.index.scribe_section_btn_aria_label"
        btnId1="btn-scribe"
      />
      <LandingContent
        contentPosition="top"
        header="i18n.pages._global.our_supporters"
        tagline="i18n.pages.index.our_supporters_tagline"
        text="i18n.pages.index.our_supporters_text"
        imageAltText=""
        btnText1="i18n.pages._global.become_supporter"
        btnUrl1="/docs/about/support-us"
        btnAriaLabel1="i18n.pages.index.our_supporters_btn_become_aria_label"
        btnText2="i18n.pages.index.view_all_supporters"
        btnUrl2="/docs/about/supporters-showcase"
        btnAriaLabel2="i18n.pages.index.our_supporters_btn_view_aria_label"
        subText=""
        btnId1="btn-support-us"
        btnId2="btn-supporters-showcase"
      />
      <div
        class="flex flex-col items-center justify-center w-full md:w-1/2 pb-10 pt-16 sm:pb-16 md:pb-20 xl:py-24 ml-auto mr-auto space-y-3 xl:space-y-4"
      >
        <h2
          class="w-10/12 text-center text-2xl font-semibold sm:w-full sm:text-3xl xl:text-4xl"
        >
          {{ $t("i18n.pages.index.contributors") }}
        </h2>
        <p
          class="text-transform: w-10/12 text-center text-base uppercase tracking-wider text-distinct-text sm:w-full sm:text-lg xl:text-xl"
        >
          {{ $t("i18n.pages.index.contributors_tagline") }}
        </p>
        <p
          class="mx-12 w-10/12 pb-2 text-center text-sm sm:text-base md:w-full md:max-w-lg md:text-lg lg:max-w-xl"
        >
          {{ $t("i18n.pages.index.contributors_text") }}
        </p>
        <GridGitHubContributors alwaysCentered/>
      </div>
    </div>
  </div>
</template>
