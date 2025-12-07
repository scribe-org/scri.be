<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :isMenuButtonUppercase="false"
    :location="location"
    :menuButtonIcon="IconMap.DATA_PACK"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
    menuButtonLabel="i18n._global.data_extraction"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/data">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/data')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/data'),
            }"
            :iconName="IconMap.INDEX"
            :isButton="false"
            label="i18n.components.dropdown._global.index"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/data/learn-more">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/data/learn-more')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/data/learn-more'),
            }"
            :iconName="IconMap.INFORMATION_CIRCLE"
            :isButton="false"
            label="i18n._global.learn_more"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/data/changelog">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/data/changelog')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/data/changelog'),
            }"
            :iconName="IconMap.CHANGELOG"
            :isButton="false"
            label="i18n._global.changelog"
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
