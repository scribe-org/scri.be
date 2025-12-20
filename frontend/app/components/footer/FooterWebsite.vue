<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <footer
    class="responsive-px-5 responsive-py-5 bg-scribe-blue text-primary-text"
  >
    <!-- Note: Content Sections Top for Mobile -->
    <FooterFlexCol class="flex flex-col lg:hidden" :links="links" />
    <!-- Note: Content Sections Left and Right for Desktop (xl) -->
    <FooterFlex class="hidden lg:flex" :links="links" />
  </footer>
</template>

<script setup lang="ts">
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

const links = {
  connectLinks,
  resourcesLinks,
  organizationLinks,
  platformLinks,
  legalLinks,
};
</script>
