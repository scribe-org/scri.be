<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :isMenuButtonUppercase="false"
    :location="location"
    :menuButtonIcon="IconMap.KEYBOARD"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
    menuButtonLabel="i18n._global.keyboard_apps"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/keyboard-apps">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/keyboard-apps')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps'),
            }"
            :iconName="IconMap.INDEX"
            :isButton="false"
            label="i18n.components.dropdown._global.index"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/keyboard-apps/learn-more')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps/learn-more'),
            }"
            :iconName="IconMap.INFORMATION_CIRCLE"
            :isButton="false"
            label="i18n._global.learn_more"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/android-changelog">
        <MenuItem v-slot="{ active }" class="flex whitespace-nowrap">
          <MenuItemLabel
            :active="
              active || isCurrentPath('/docs/keyboard-apps/android-changelog')
            "
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps/android-changelog'),
            }"
            :iconName="IconMap.CHANGELOG"
            :isButton="false"
            label="i18n._global.android_changelog"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/ios-changelog">
        <MenuItem v-slot="{ active }" class="flex whitespace-nowrap">
          <MenuItemLabel
            :active="
              active || isCurrentPath('/docs/keyboard-apps/ios-changelog')
            "
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/keyboard-apps/ios-changelog'),
            }"
            :iconName="IconMap.CHANGELOG"
            :isButton="false"
            label="i18n._global.ios_changelog"
          />
        </MenuItem>
      </NuxtLink>
    </ul>
  </DropdownBase>
</template>

<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";

defineProps<{
  location?: DropdownLocation;
}>();

const { isCurrentPath } = useCurrentPath();
</script>
