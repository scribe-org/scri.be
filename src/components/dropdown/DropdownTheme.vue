<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="p-2 rounded-md border border-white/20 hover:bg-white/10 hover:border-white/40 
             transition-all duration-300 group"
    >
      <svg v-if="currentTheme === 'dark'"
           class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
           xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg v-else
           class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
           xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg py-1 
             text-gray-900 dark:text-gray-100 backdrop-blur-sm border border-white/20"
    >
      <button
        v-for="theme in themes"
        :key="theme.value"
        @click="selectTheme(theme.value)"
        class="w-full px-4 py-2 text-left hover:bg-white dark:hover:bg-gray-700/50 
               transition-colors duration-150 flex items-center gap-3"
        :class="{ 'bg-gray-50 dark:bg-gray-700': currentTheme === theme.value }"
      >
        <component :is="theme.icon" class="w-5 h-5" />
        {{ theme.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const isOpen = ref(false)
const { theme, setTheme } = useTheme()
const currentTheme = computed(() => theme.value)

const themes = [
  { 
    value: 'light', 
    label: 'Light',
    icon: 'SunIcon'
  },
  { 
    value: 'dark', 
    label: 'Dark',
    icon: 'MoonIcon'
  },
  { 
    value: 'system', 
    label: 'System',
    icon: 'ComputerIcon'
  }
]

const selectTheme = (value: string) => {
  setTheme(value)
  isOpen.value = false
}
</script>
