<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :location="location"
    :menuButtonIcon="IconMap.SERVER"
    menuButtonLabel="Data Server"
    :isMenuButtonUppercase="false"
    :menuButtonAriaLabel="'i18n.components.dropdown._global.open_dropdown_aria_label'"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/server/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            label="Learn more"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/server/available-data">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            label="Available data"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/server/changelog">
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
