<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :location="location"
    :menuButtonIcon="IconMap.CIRCLE_INFO"
    menuButtonLabel="About Scribe"
    :isMenuButtonUppercase="false"
    :menuButtonAriaLabel="'i18n.components.dropdown._global.open_dropdown_aria_label'"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/about/community">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            label="Our community"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/around-the-web">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            label="Around the web"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/supporters-showcase">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            label="Supporters"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/support-us">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            label="Support Scribe"
            :active="active"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/imprint">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel :isButton="false" label="Imprint" :active="active" />
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
