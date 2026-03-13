<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <footer
    class="responsive-px-5 responsive-py-5 bg-scribe-blue text-primary-text"
  >
    <!-- Note: Content Sections Top for Mobile -->
    <div class="flex flex-col items-center justify-center space-y-5 lg:hidden">
      <div class="flex flex-col items-center justify-center space-y-2">
        <p>
          {{ $t("i18n.components.footer.flex._global.scribe_tagline") }}
        </p>
        <!-- Note: Platform Links -->
        <div class="flex flex-wrap items-center justify-center">
          <template v-for="(platform, index) in platformLinks">
            <div class="hover:text-distinct-text">
              <NuxtLink
                v-if="platform.isLocalePath"
                class="focus-brand"
                :to="localePath(platform.url)"
              >
                {{ $t(platform.name) }}
              </NuxtLink>
              <a v-else class="focus-brand" :href="platform.url" target="_blank">
                {{ $t(platform.name) }}
              </a>
            </div>
            <div v-if="index < platformLinks.length - 1" class="px-2">
              •
            </div>
          </template>
        </div>
      </div>
      <div
        class="grid max-w-xl justify-items-center gap-0 text-center sm:grid-cols-1 sm:gap-12 sm:text-left md:gap-16"
      >
        <!-- Note: Connect Links -->
        <div class="text-center">
          <p class="text-xl font-medium">
            {{ $t("i18n.components.footer.flex._global.connect") }}
          </p>
          <div class="mt-1 flex gap-10 sm:mt-0 sm:flex-col sm:gap-0">
            <template v-for="(connect, index) in connectLinks">
              <a
              :aria-label="$t(connect.name)"
              class="mt-2 flex items-center space-x-2 text-base focus-brand hover:text-distinct-text"
              :class="{ 'mt-3': index === 0 }"
              :href="connect.url"
              target="_blank"
              >
              <MetaTagSocialMedia
                class="text-2xl sm:text-base"
                :iconName="connect.iconName"
                :text="$t(connect.name)"
                textUtilityClasses="sr-only sm:not-sr-only"
              />
              </a>
            </template>
          </div>
        </div>
        <!-- Note: Resources Links -->
        <div>
          <p class="mt-6 text-xl font-medium sm:mt-0">
            {{ $t("i18n.components.footer.flex._global.resources") }}
          </p>
          <div class="flex flex-wrap justify-center gap-x-1 sm:flex-col sm:gap-0">
            <template v-for="(resource, index) in resourcesLinks">
              <p
                class="mt-2 text-base hover:text-distinct-text"
                :class="{ 'sm:mt-3': index === 0 }"
              >
                <NuxtLink class="focus-brand" :to="localePath(resource.url)">
                  {{ $t(resource.name) }}
                </NuxtLink>
                <span
                  v-if="index < resourcesLinks.length - 1"
                  class="flex-inline px-2 sm:hidden"
                >
                  •
                </span>
              </p>
            </template>
          </div>
        </div>
        <!-- Note: Organization Links -->
        <div>
          <p class="mt-6 text-xl font-medium sm:mt-0">
            {{ $t("i18n.components.footer.flex._global.organization") }}
          </p>
          <div class="flex flex-wrap justify-center gap-x-1 sm:flex-col sm:gap-0">
            <template v-for="(oLink, index) in organizationLinks">
              <p
                class="mt-2 text-base hover:text-distinct-text"
                :class="{ 'sm:mt-3': index === 0 }"
              >
                <NuxtLink class="focus-brand" :to="localePath(oLink.url)">
                  {{ $t(oLink.name) }}
                </NuxtLink>
                <span
                  v-if="index < organizationLinks.length - 1"
                  class="flex-inline px-2 sm:hidden"
                >
                  •
                </span>
              </p>
            </template>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <!-- Note: Legal Links -->
        <div class="flex flex-wrap items-center justify-center">
          <template v-for="(policy, index) in legalLinks">
            <div class="hover:text-distinct-text">
              <NuxtLink class="focus-brand" :to="localePath(policy.url)">
                {{ $t(policy.name) }}
              </NuxtLink>
              <span
                v-if="index < legalLinks.length - 1"
                class="flex-inline px-2"
              >
                •
              </span>
            </div>
          </template>
        </div>
        <a
        class="mt-2 w-fit hover:text-distinct-text"
        href="https://www.netlify.com/"
        target="_blank"
        >
        {{ $t("i18n.components.footer.flex._global.powered_by_netlify") }}
        </a>
        <p class="mt-2">
          {{
            $t("i18n.components.footer.flex._global.copyright", {
              year: new Date().getFullYear(),
            })
          }}
        </p>
      </div>
    </div>
    <!-- Note: Content Sections Left and Right for Desktop (xl) -->
    <div class="hidden flex-row justify-start lg:flex">
      <!-- Note: Content Sections Left -->
      <div class="mt-0 flex w-[80%] flex-col justify-items-start">
        <p class="mt-3">
          {{ $t("i18n.components.footer.flex._global.scribe_tagline") }}
        </p>
        <!-- Note: Platform Links -->
        <div class="mt-2 flex justify-start">
          <template v-for="(platform, index) in platformLinks">
            <div class="hover:text-distinct-text">
              <NuxtLink
                v-if="platform.isLocalePath"
                class="focus-brand"
                :to="localePath(platform.url)"
              >
                {{ $t(platform.name) }}
              </NuxtLink>
              <a v-else class="focus-brand" :href="platform.url" target="_blank">
                {{ $t(platform.name) }}
              </a>
            </div>
            <div v-if="index < platformLinks.length - 1" class="px-2">
              •
            </div>
          </template>
        </div>
        <!-- Note: Legal Links -->
        <div class="mt-5 flex">
          <template v-for="(policy, index) in legalLinks">
            <div class="hover:text-distinct-text">
              <NuxtLink class="focus-brand" :to="localePath(policy.url)">
                {{ $t(policy.name) }}
              </NuxtLink>
            </div>
            <div v-if="index < legalLinks.length - 1" class="px-2">
              •
            </div>
          </template>
        </div>
        <a
        class="mt-2 w-fit focus-brand hover:text-distinct-text"
        href="https://www.netlify.com/"
        target="_blank"
        >
        {{ $t("i18n.components.footer.flex._global.powered_by_netlify") }}
        </a>
        <div class="mt-2">
          {{
            $t("i18n.components.footer.flex._global.copyright", {
              year: new Date().getFullYear(),
            })
          }}
        </div>
      </div>
      <!-- Note: Content Sections Right -->
      <div
        class="flex w-full justify-end lg:space-x-6 xl:space-x-8 2xl:space-x-24"
      >
        <!-- Note: Connect Links -->
        <div>
          <p class="text-xl font-medium">
            {{ $t("i18n.components.footer.flex._global.connect") }}
          </p>
          <template v-for="(connect, index) in connectLinks">
            <a
            :aria-label="$t(connect.name)"
            class="mt-2 flex items-center space-x-2 text-base focus-brand hover:text-distinct-text"
            :class="{ 'mt-3': index === 0 }"
            :href="connect.url"
            target="_blank"
            >
            <MetaTagSocialMedia
              class="!gap-2"
              :iconName="connect.iconName"
              :iconSize="connect.iconSize"
              :text="$t(connect.name)"
            />
            </a>
          </template>
        </div>
        <!-- Note: Resources Links -->
        <div>
          <p class="text-xl font-medium">
            {{ $t("i18n.components.footer.flex._global.resources") }}
          </p>
          <template v-for="(resource, index) in resourcesLinks">
            <p
              class="mt-2 text-base hover:text-distinct-text"
              :class="{ 'mt-3': index === 0 }"
            >
              <NuxtLink class="focus-brand" :to="localePath(resource.url)">
                {{ $t(resource.name) }}
              </NuxtLink>
            </p>
          </template>
        </div>
        <!-- Note: Organization Links -->
        <div>
          <p class="text-xl font-medium">
            {{ $t("i18n.components.footer.flex._global.organization") }}
          </p>
          <template v-for="(oLink, index) in organizationLinks">
            <p
              class="mt-2 text-base hover:text-distinct-text"
              :class="{ 'mt-3': index === 0 }"
            >
              <NuxtLink class="focus-brand" :to="localePath(oLink.url)">
                {{ $t(oLink.name) }}
              </NuxtLink>
            </p>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const localePath = useLocalePath();

const connectLinks = [
  {
    name: "team@scri.be",
    url: "mailto:team@scri.be",
    iconName: `${IconMap.ENVELOPE}`,
    iconSize: "1.05em",
  },
  {
    name: "i18n.components._global.github",
    url: "https://github.com/scribe-org",
    iconName: `${IconMap.GITHUB}`,
    iconSize: "1.05em",
  },
  {
    name: "i18n.components._global.matrix",
    url: "https://matrix.to/#/#scribe_community:matrix.org",
    iconName: `${IconMap.MATRIX}`,
    iconSize: "1.061em",
  },
  {
    name: "i18n.components._global.mastodon",
    url: "https://wikis.world/@scribe",
    iconName: `${IconMap.MASTODON}`,
    iconSize: "1em",
  },
];
const resourcesLinks = [
  {
    name: "i18n.components._global.documentation",
    url: "/docs",
  },
];
const organizationLinks = [
  {
    name: "i18n._global.about_scribe",
    url: "/docs/about/community",
  },
  {
    name: "i18n._global.supporters",
    url: "/docs/about/supporters-showcase",
  },
  {
    name: "i18n._global.imprint",
    url: "/docs/about/imprint",
  },
];
const platformLinks = [
  {
    name: "i18n.components.footer_website.version_number",
    isLocalePath: false,
    url: "https://github.com/scribe-org/scri.be/releases",
  },
  {
    name: "i18n.components.footer_website.source_code",
    isLocalePath: false,
    url: "https://github.com/scribe-org",
  },
  {
    name: "i18n.components.footer_website.roadmap",
    isLocalePath: true,
    url: "https://github.com/orgs/scribe-org/projects/1",
  },
];
const legalLinks = [
  {
    name: "i18n._global.trademark_policy",
    url: "/docs/legal/trademark-policy",
  },
  {
    name: "i18n._global.privacy_policy",
    url: "/docs/legal/privacy-policy",
  },
];
</script>
