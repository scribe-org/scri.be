<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :location="location"
    :menuButtonIcon="IconMap.SERVER"
    menuButtonLabel="i18n._global.data_server"
    :isMenuButtonUppercase="false"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/server">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.INDEX"
            label="i18n.components.dropdown._global.index"
            :active="active || isCurrentPath('/docs/server')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/server'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/server/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.INFORMATION_CIRCLE"
            label="i18n._global.learn_more"
            :active="active || isCurrentPath('/docs/server/learn-more')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/server/learn-more'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <!-- <NuxtLink to="/docs/server/available-data">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.DATA_AVAILABLE"
            label="i18n._global.available_data"
            :active="active || isCurrentPath('/docs/server/available-data')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/server/available-data'),
            }"
          />
        </MenuItem>
      </NuxtLink> -->
      <NuxtLink to="/docs/server/changelog">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.CHANGELOG"
            label="i18n._global.changelog"
            :active="active || isCurrentPath('/docs/server/changelog')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/server/changelog'),
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
