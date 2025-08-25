<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :location="location"
    :menuButtonIcon="IconMap.KEYBOARD"
    menuButtonLabel="i18n._global.keyboard_apps"
    :isMenuButtonUppercase="false"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/keyboard-apps">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.INDEX"
            label="i18n.components.dropdown._global.index"
            :active="active || isCurrentPath('/docs/keyboard-apps')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.INFORMATION_CIRCLE"
            label="i18n._global.learn_more"
            :active="active || isCurrentPath('/docs/keyboard-apps/learn-more')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps/learn-more'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/android-changelog">
        <MenuItem v-slot="{ active }" class="flex whitespace-nowrap">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.CHANGELOG"
            label="i18n._global.android_changelog"
            :active="
              active || isCurrentPath('/docs/keyboard-apps/android-changelog')
            "
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps/android-changelog'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/ios-changelog">
        <MenuItem v-slot="{ active }" class="flex whitespace-nowrap">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.CHANGELOG"
            label="i18n._global.ios_changelog"
            :active="
              active || isCurrentPath('/docs/keyboard-apps/ios-changelog')
            "
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps/ios-changelog'),
            }"
          />
        </MenuItem>
      </NuxtLink>
    </ul>
  </DropdownBase>
</template>

<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";

import type { DropdownLocation } from "~/types/location";

import { IconMap } from "~/types/icon-map";

defineProps<{
  location?: DropdownLocation;
}>();

const { isCurrentPath } = useCurrentPath();
</script>
