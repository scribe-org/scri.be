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
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.INFORMATION_CIRCLE"
            label="i18n._global.learn_more"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/keyboard-apps/changelog">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.CHANGELOG"
            label="i18n._global.changelog"
            :active="active"
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
</script>
