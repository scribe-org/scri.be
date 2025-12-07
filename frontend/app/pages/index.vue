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
        btnAriaLabel1="i18n.pages.index.language_keyboards_aria_label"
        btnId1="btn-keyboard-apps"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/keyboard-apps/learn-more"
        contentPosition="left"
        header="i18n.pages._global.language_keyboards"
        imageAltText="i18n.pages._global.language_keyboards_img_alt_text"
        :imgURL="LANGUAGE_KEYBOARDS_IMAGE_URL"
        tagline="i18n.pages.index.language_keyboards_tagline"
        text="i18n.pages.index.language_keyboards_text"
      />
      <LandingContent
        btnAriaLabel1="i18n.pages.index.conjugate_aria_label"
        btnId1="btn-conjugate"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/conjugate/learn-more"
        contentPosition="right"
        header="i18n.pages.index.conjugate_header"
        imageAltText="i18n.pages._global.conjugate_img_alt_text"
        :imgURL="CONJUGATE_IMAGE_URL"
        tagline="i18n.pages.index.conjugate_tagline"
        text="i18n.pages.index.conjugate_text"
      />
      <LandingContent
        btnAriaLabel1="i18n.pages.index.data_aria_label"
        btnId1="btn-data"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/data/learn-more"
        contentPosition="left"
        header="i18n._global.data_extraction"
        imageAltText="i18n.pages._global.data_img_alt_text"
        :imgURL="DATA_IMAGE_URL"
        tagline="i18n.pages.index.data_tagline"
        text="i18n.pages.index.data_text"
      />
      <LandingContent
        btnAriaLabel1="i18n.pages.index.server_aria_label"
        btnId1="btn-server"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/server/learn-more"
        contentPosition="right"
        header="i18n._global.data_server"
        imageAltText="i18n.pages._global.server_img_alt_text"
        :imgURL="SERVER_IMAGE_URL"
        tagline="i18n.pages.index.server_tagline"
        text="i18n.pages.index.server_text"
      />
      <LandingTechBanner />
      <LandingContent
        btnAriaLabel1="i18n.pages.index.scribe_section_btn_aria_label"
        btnId1="btn-scribe"
        btnText1="i18n._global.learn_more"
        btnUrl1="/docs/about/community"
        contentPosition="left"
        header="i18n.pages.index.about_us"
        imageAltText="i18n.pages.index.scribe_community_img_alt_text"
        :imgURL="SCRIBE_COMMUNITY_IMAGE_URL"
        tagline="i18n.pages.index.scribe_section_tagline"
        text="i18n.pages.index.scribe_section_text"
      />
      <LandingContent
        btnAriaLabel1="i18n.pages.index.our_supporters_btn_become_aria_label"
        btnAriaLabel2="i18n.pages.index.our_supporters_btn_view_aria_label"
        btnId1="btn-support-us"
        btnId2="btn-supporters-showcase"
        btnText1="i18n.pages._global.become_supporter"
        btnText2="i18n.pages.index.view_all_supporters"
        btnUrl1="/docs/about/support-us"
        btnUrl2="/docs/about/supporters-showcase"
        contentPosition="top"
        header="i18n.pages._global.our_supporters"
        imageAltText=""
        subText=""
        tagline="i18n.pages.index.our_supporters_tagline"
        text="i18n.pages.index.our_supporters_text"
      />
      <div
        class="mx-auto flex w-4/5 flex-col items-center justify-center space-y-3 pb-10 pt-16 sm:pb-16 md:w-3/5 md:pb-20 xl:space-y-4 xl:py-24"
      >
        <h2
          class="w-4/5 text-center text-2xl font-semibold sm:text-3xl md:w-3/5 xl:text-4xl"
        >
          {{ $t("i18n.pages._global.contributors") }}
        </h2>
        <p
          class="w-4/5 text-center text-base uppercase tracking-wider text-distinct-text sm:text-lg md:w-3/5 xl:text-xl"
        >
          {{ $t("i18n.pages.index.contributors_tagline") }}
        </p>
        <p class="mx-12 w-4/5 pb-2 text-center text-sm sm:text-base md:w-3/5">
          {{ $t("i18n.pages.index.contributors_text") }}
        </p>
        <GridGitHubContributors alwaysCentered />
      </div>
    </div>
  </div>
</template>
