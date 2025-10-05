<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: string | undefined) => {
    return titleChunk ? `${titleChunk} • Scribe` : "Scribe";
  },
});
</script>
