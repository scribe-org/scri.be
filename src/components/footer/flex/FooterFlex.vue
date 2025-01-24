<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex justify-between">
    <!-- Left Side -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <p class="text-sm">Open-source language solutions</p>
        <div class="flex items-center gap-2 text-xs">
          <span>v1.0.0</span>
          <span>•</span>
          <a href="#" class="hover:underline">View source code</a>
        </div>
      </div>
      <div class="flex flex-col gap-1 text-xs">
        <a href="#" class="hover:underline">Trademark Policy</a>
        <a href="#" class="hover:underline">Privacy Policy</a>
      </div>
      <div class="text-xs">
        <p>This site is powered by Netlify.</p>
        <p>License: AGPL-3.0, CC BY-SA 4.0.</p>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex gap-20">
      <!-- Connect -->
      <div>
        <h3 class="font-semibold mb-4">Connect</h3>
        <div class="flex flex-col gap-2">
          <a v-for="link in links.connectLinks" 
             :key="link.url" 
             :href="link.url"
             class="hover:underline"
          >
            {{ $t(link.name) }}
          </a>
        </div>
      </div>

      <!-- Organization -->
      <div>
        <h3 class="font-semibold mb-4">Organization</h3>
        <div class="flex flex-col gap-2">
          <a v-for="link in links.organizationLinks" 
             :key="link.url" 
             :href="link.url"
             class="hover:underline"
          >
            {{ $t(link.name) }}
          </a>
        </div>
      </div>

      <!-- Apps -->
      <div>
        <h3 class="font-semibold mb-4">Apps</h3>
        <div class="flex flex-col gap-3">
          <AppStoreIcon class="h-10" />
          <GooglePlayIcon class="h-10" />
          <FDroidIcon class="h-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppStoreIcon, GooglePlayIcon, FDroidIcon, GithubIcon, MatrixIcon, MastodonIcon } from '@/components/icons'

defineProps<{
  links: {
    connectLinks: Array<{
      name: string
      url: string
      iconName?: string
      iconSize?: string
    }>
    organizationLinks: Array<{
      name: string
      url: string
    }>
  }
}>()
</script>
