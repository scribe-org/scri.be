<template>
  <div class="flex items-center justify-center space-x-2 my-8">
    <!-- Previous Button -->
    <button
      @click="emit('update:modelValue', currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
             text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
             hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200
             disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Previous
    </button>
    
    <!-- Page Numbers -->
    <div class="flex items-center">
      <!-- First Page -->
      <button
        v-if="currentPage > 3"
        @click="emit('update:modelValue', 1)"
        class="px-4 py-2 border border-gray-300 dark:border-gray-600 
               text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
               hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200
               rounded-lg mx-1"
      >
        1
      </button>

      <!-- Ellipsis -->
      <span 
        v-if="currentPage > 3" 
        class="px-3 py-2 text-gray-500 dark:text-gray-400"
      >
        ...
      </span>

      <!-- Page Numbers -->
      <button
        v-for="page in displayedPages"
        :key="page"
        @click="emit('update:modelValue', page)"
        :class="[
          'px-4 py-2 mx-1 rounded-lg border transition-colors duration-200',
          page === currentPage
            ? 'bg-blue-500 text-white border-blue-500 dark:bg-blue-600 dark:border-blue-600'
            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
        ]"
      >
        {{ page }}
      </button>

      <!-- Ellipsis -->
      <span 
        v-if="currentPage < totalPages - 2" 
        class="px-3 py-2 text-gray-500 dark:text-gray-400"
      >
        ...
      </span>

      <!-- Last Page -->
      <button
        v-if="currentPage < totalPages - 2"
        @click="emit('update:modelValue', totalPages)"
        class="px-4 py-2 border border-gray-300 dark:border-gray-600 
               text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
               hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200
               rounded-lg mx-1"
      >
        {{ totalPages }}
      </button>
    </div>

    <!-- Next Button -->
    <button
      @click="emit('update:modelValue', currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
             text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
             hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200
             disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
    >
      Next
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const currentPage = computed(() => props.modelValue)

const displayedPages = computed(() => {
  const pages = []
  const maxDisplayed = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxDisplayed / 2))
  let end = Math.min(props.totalPages, start + maxDisplayed - 1)

  if (end - start + 1 < maxDisplayed) {
    start = Math.max(1, end - maxDisplayed + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})
</script> 