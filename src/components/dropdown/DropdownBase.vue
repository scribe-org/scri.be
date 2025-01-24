<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="relative">
    <button 
      :class="[
        'flex items-center gap-2 px-3 py-1 rounded-lg text-primary-text',
        'hover:bg-layer-2 transition-colors duration-200'
      ]"
      @click="isOpen = !isOpen"
      :aria-label="ariaLabel"
    >
      <slot name="trigger" />
    </button>

    <div 
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-layer-1 rounded-lg shadow-lg"
      @click.outside="isOpen = false"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

defineProps<{
  ariaLabel?: string
}>()

const isOpen = ref(false)
</script> 