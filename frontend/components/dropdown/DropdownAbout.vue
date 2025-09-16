<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :location="location"
    :menuButtonIcon="IconMap.SCRIBE"
    menuButtonLabel="i18n._global.about_scribe"
    :isMenuButtonUppercase="false"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/about">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.INDEX"
            label="i18n.components.dropdown._global.index"
            :active="active || isCurrentPath('/docs/about')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/community">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.COMMUNITY"
            label="i18n._global.our_community"
            :active="active || isCurrentPath('/docs/about/community')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/community'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/blog-posts">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.BLOG_POST"
            label="i18n._global.blog_posts"
            :active="active || isCurrentPath('/docs/about/blog-posts')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/blog-posts'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/supporters-showcase">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.HEART"
            label="i18n._global.supporters"
            :active="active || isCurrentPath('/docs/about/supporters-showcase')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/supporters-showcase'),
            }"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/support-us">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :isButton="false"
            :iconName="IconMap.SUPPORT"
            label="i18n._global.support_scribe"
            :active="active || isCurrentPath('/docs/about/support-us')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/support-us'),
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
