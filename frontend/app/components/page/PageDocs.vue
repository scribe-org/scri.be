<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="responsive-py-4 responsive-px-5 flex w-full flex-col items-center"
  >
    <PageContent
      :imgAltText="imgAltText"
      :imgURL="imgURL"
      :includeBreadcrumbs="true"
    >
      <slot />
    </PageContent>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgURL: string;
  imgAltText: string;
}>();
</script>
