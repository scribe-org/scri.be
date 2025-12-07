<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="responsive-py-4 flex w-full flex-col space-y-1 bg-scribe-blue-lighter text-primary-text dark:bg-scribe-blue-darker sm:space-y-2 xl:space-y-4"
  >
    <div
      class="flex justify-center space-x-12 text-lg sm:space-x-8 xl:space-x-12 xl:text-xl"
    >
      <a
        :aria-label="$t('i18n.components._global.github')"
        class="focus-brand hover:text-distinct-text"
        href="https://github.com/scribe-org"
        target="_blank"
      >
        <MetaTagSocialMedia
          class="!gap-2"
          :iconName="IconMap.GITHUB"
          iconSize="1.1em"
          :text="$t('i18n.components._global.github')"
          textUtilityClasses="sr-only sm:not-sr-only"
        />
      </a>
      <a
        :aria-label="$t('i18n.components._global.matrix')"
        class="focus-brand hover:text-distinct-text"
        href="https://matrix.to/#/#scribe_community:matrix.org"
        target="_blank"
      >
        <MetaTagSocialMedia
          class="!gap-2"
          :iconName="IconMap.MATRIX"
          iconSize="1.061em"
          :text="$t('i18n.components._global.matrix')"
          textUtilityClasses="sr-only sm:not-sr-only"
        />
      </a>
      <a
        :aria-label="$t('i18n.components._global.mastodon')"
        class="focus-brand hover:text-distinct-text"
        href="https://wikis.world/@scribe"
        target="_blank"
      >
        <MetaTagSocialMedia
          class="!gap-2"
          :iconName="IconMap.MASTODON"
          iconSize="1em"
          :text="$t('i18n.components._global.mastodon')"
          textUtilityClasses="sr-only sm:not-sr-only"
        />
      </a>
    </div>
  </div>
</template>
