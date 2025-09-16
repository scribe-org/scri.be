<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <NuxtLink
    class="card-style group flex w-full space-x-4 bg-layer-1 px-3 py-3 hover:bg-highlight dark:hover:bg-highlight lg:px-4"
    :to="localPath(url)"
  >
    <div
      class="flex h-20 w-20 items-center justify-center rounded-full bg-scribe-blue fill-primary-text text-primary-text group-hover:opacity-90 sm:h-24 sm:w-24"
    >
      <Icon :name="iconURL" :size="iconSize" />
    </div>
    <div
      class="text-light-text dark:text-dark-text w-min grow flex-col space-y-2 lg:space-y-3"
    >
      <p class="responsive-h4 font-bold">
        {{ $t(title) }}
      </p>
      <p>{{ $t(description) }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const localPath = useLocalePath();

defineProps<{
  url: string;
  iconURL: string;
  iconSize: string;
  imgAltText: string;
  title: string;
  description: string;
}>();
</script>
