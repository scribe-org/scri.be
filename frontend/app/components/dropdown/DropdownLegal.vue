<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :isMenuButtonUppercase="false"
    :location="location"
    :menuButtonIcon="IconMap.LEGAL"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
    menuButtonLabel="i18n._global.legal"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/legal">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/legal')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/legal'),
            }"
            :iconName="IconMap.INDEX"
            :isButton="false"
            label="i18n.components.dropdown._global.index"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/legal/trademark-policy">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/legal/trademark-policy')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/legal/trademark-policy'),
            }"
            :iconName="IconMap.TRADEMARK"
            :isButton="false"
            label="i18n._global.trademark_policy"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/legal/privacy-policy">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/legal/privacy-policy')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/legal/privacy-policy'),
            }"
            :iconName="IconMap.PRIVACY_POLICY"
            :isButton="false"
            label="i18n._global.privacy_policy"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/imprint">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/about/imprint')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/imprint'),
            }"
            :iconName="IconMap.INFORMATION_CIRCLE"
            :isButton="false"
            label="i18n._global.imprint"
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
