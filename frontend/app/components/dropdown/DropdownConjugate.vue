<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :isMenuButtonUppercase="false"
    :location="location"
    :menuButtonIcon="IconMap.CONJUGATE"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
    menuButtonLabel="i18n._global.conjugate_apps"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/conjugate">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/conjugate')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/conjugate'),
            }"
            :iconName="IconMap.INDEX"
            :isButton="false"
            label="i18n.components.dropdown._global.index"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/conjugate/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/conjugate/learn-more')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/conjugate/learn-more'),
            }"
            :iconName="IconMap.INFORMATION_CIRCLE"
            :isButton="false"
            label="i18n._global.learn_more"
          />
        </MenuItem>
      </NuxtLink>
      <!-- <NuxtLink to="/docs/conjugate/android-changelog">
        <MenuItem v-slot="{ active }" class="flex whitespace-nowrap">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.CHANGELOG"
            label="i18n._global.android_changelog"
            :active="
              active || isCurrentPath('/docs/conjugate/android-changelog')
            "
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/conjugate/android-changelog'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/conjugate/ios-changelog">
        <MenuItem v-slot="{ active }" class="flex whitespace-nowrap">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.CHANGELOG"
            label="i18n._global.ios_changelog"
            :active="active || isCurrentPath('/docs/conjugate/ios-changelog')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/conjugate/ios-changelog'),
            }"
          />
        </MenuItem>
      </NuxtLink> -->
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
