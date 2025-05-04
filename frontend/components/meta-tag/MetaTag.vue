<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex items-center gap-1">
    <Icon
      class="mr-1"
      :name="iconName"
      :size="iconSize ? iconSize : '1.25em'"
    />
    <p>
      {{ value }}
    </p>
    <p v-if="label">
      {{ $t(label) }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconName: string;
  value: string;
  label?: string;
  iconSize?: string;
}>();
</script>
