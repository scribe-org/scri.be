<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="grid h-fit w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    <CardDocsEntry
      v-for="card in cards"
      :key="card.id"
      :description="card.description"
      :iconSize="card.iconSize"
      :iconURL="card.iconURL"
      :imgAltText="card.imgAltText"
      :title="card.title"
      :url="route.path.replace(/\/$/, '') + '/' + card.url"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cards?: DocsEntry[];
}>();

const route = useRoute();
</script>
