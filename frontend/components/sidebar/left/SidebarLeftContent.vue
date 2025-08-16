<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex flex-col space-y-2 px-1 pt-4 transition-all duration-500">
    <BtnRouteInternal
      id="btn-get-in-touch-large"
      :class="getLinkClasses('/docs')"
      :cta="true"
      linkTo="/docs"
      :label="
        !sidebar.collapsed || !sidebar.collapsedSwitch
          ? 'i18n.components._global.documentation'
          : ''
      "
      fontSize="base"
      :leftIcon="IconMap.DOCUMENTATION"
      iconSize="1.1em"
      ariaLabel="i18n.components._global.view_docs_aria_label"
    />
    <DropdownLanguageKeyboards
      :class="getLinkClasses('/docs/keyboard-apps')"
      :location="DropdownLocation.SIDE_LEFT_MENU"
    />
    <DropdownConjugate
      :class="getLinkClasses('/docs/conjugate')"
      :location="DropdownLocation.SIDE_LEFT_MENU"
    />
    <DropdownData
      :class="getLinkClasses('/docs/data')"
      :location="DropdownLocation.SIDE_LEFT_MENU"
    />
    <DropdownServer
      :class="getLinkClasses('/docs/server')"
      :location="DropdownLocation.SIDE_LEFT_MENU"
    />
    <DropdownAbout
      :class="getLinkClasses('/docs/about')"
      :location="DropdownLocation.SIDE_LEFT_MENU"
    />
    <DropdownLegal
      :class="getLinkClasses('/docs/legal')"
      :location="DropdownLocation.SIDE_LEFT_MENU"
    />
  </div>
</template>

<script setup lang="ts">
import { IconMap } from "~/types/icon-map";
import { DropdownLocation } from "~/types/location";

const sidebar = useSidebar();
const route = useRoute();

// Function to check if a path is active.
const isActive = (path: string) => {
  if (path === "/docs") {
    return route.path === "/docs";
  }

  return route.path === path || route.path.startsWith(path + "/");
};

const baseClasses = "flex w-full border-none";

const getLinkClasses = (path: string) => {
  const active = isActive(path);
  if (active) {
    return `${baseClasses} bg-highlight hover:bg-highlight-darker dark:hover:bg-highlight-lighter`;
  } else {
    return `${baseClasses} border-0 bg-layer-0 hover:bg-highlight dark:hover:bg-highlight`;
  }
};
</script>
