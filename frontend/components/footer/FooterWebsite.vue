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
import { IconMap } from "~/types/icon-map";

const connectLinks = [
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
    url: "/",
  },
  // {
  //   name: "i18n._global.contact,
  //   url: "/contact",
  // },
];

const organizationLinks = [
  {
    name: "i18n._global.about",
    url: "/",
  },
  {
    name: "i18n.components.footer_website.supporters",
    url: "/",
  },
  {
    name: "i18n.components.footer_website.imprint",
    url: "/",
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
    name: "i18n.components._global.roadmap",
    isLocalePath: true,
    url: "https://github.com/orgs/scribe-org/projects/1",
  },
];

const legalLinks = [
  {
    name: "i18n.components.footer_website.trademark_policy",
    url: "/",
  },
  {
    name: "i18n.components.footer_website.privacy_policy",
    url: "/",
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
