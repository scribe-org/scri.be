<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <HeaderWebsite v-if="!aboveMediumBP" />
  <slot />
</template>

<script setup lang="ts">
const aboveMediumBP = useBreakpoint("md");
</script>
