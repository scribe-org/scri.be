<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :location="location"
    :menuButtonIcon="IconMap.PACK"
    menuButtonLabel="Data Extraction"
    :isMenuButtonUppercase="false"
    :menuButtonAriaLabel="'i18n.components.dropdown._global.open_menu_dropdown_aria_label'"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/data/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            label="Learn more"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/data/changelog">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel :isButton="false" label="Changelog" :active="active" />
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
