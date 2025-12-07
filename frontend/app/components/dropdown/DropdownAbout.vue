<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <DropdownBase
    class="dropdown-language"
    :isMenuButtonUppercase="false"
    :location="location"
    :menuButtonIcon="IconMap.SCRIBE"
    menuButtonAriaLabel="i18n.components.dropdown._global.open_menu_dropdown_aria_label"
    menuButtonLabel="i18n._global.about_scribe"
  >
    <ul class="px-2 py-2">
      <NuxtLink to="/docs/about">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/about')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about'),
            }"
            :iconName="IconMap.INDEX"
            :isButton="false"
            label="i18n.components.dropdown._global.index"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/community">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/about/community')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/community'),
            }"
            :iconName="IconMap.COMMUNITY"
            :isButton="false"
            label="i18n._global.our_community"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/blog-posts">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/about/blog-posts')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/blog-posts'),
            }"
            :iconName="IconMap.BLOG_POST"
            :isButton="false"
            label="i18n._global.blog_posts"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/supporters-showcase">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/about/supporters-showcase')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/supporters-showcase'),
            }"
            :iconName="IconMap.HEART"
            :isButton="false"
            label="i18n._global.supporters"
          />
        </MenuItem>
      </NuxtLink>
      <NuxtLink to="/docs/about/support-us">
        <MenuItem v-slot="{ active }" class="flex">
          <MenuItemLabel
            :active="active || isCurrentPath('/docs/about/support-us')"
            :class="{
              'hover:bg-scribe-blue-darker dark:hover:bg-scribe-blue-lighter':
                isCurrentPath('/docs/about/support-us'),
            }"
            :iconName="IconMap.SUPPORT"
            :isButton="false"
            label="i18n._global.support_scribe"
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
