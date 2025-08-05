<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :location="location"
    :menuButtonIcon="IconMap.LEGAL"
    menuButtonLabel="i18n._global.legal"
    :isMenuButtonUppercase="false"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/legal">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.INDEX"
            label="i18n.components.dropdown._global.index"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/legal/privacy-policy">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.PRIVACY_POLICY"
            label="i18n._global.privacy_policy"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/legal/trademark-policy">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.TRADEMARK"
            label="i18n._global.trademark_policy"
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
