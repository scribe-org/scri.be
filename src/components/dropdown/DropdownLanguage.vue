<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      :aria-label="$t('components.dropdown_language.open_dropdown_aria_label')"
      class="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <!-- Cool Globe Icon -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5 transition-transform duration-300 hover:rotate-180" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" stroke-width="2"/>
        <path 
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
          stroke-width="2"
        />
        <path 
          d="M2 12h20" 
          stroke-width="2"
        />
      </svg>

      <span class="font-medium">{{ getCurrentLanguageLabel() }}</span>

      <!-- Dropdown Arrow -->
      <svg 
        class="w-4 h-4 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M19 9l-7 7-7-7"
        />
      </svg>

      <!-- Loading Spinner -->
      <span v-if="isLoading" class="ml-1">
        <svg 
          class="animate-spin h-4 w-4" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle 
            class="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            stroke-width="4"
          />
          <path 
            class="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </span>
    </button>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
      >
        <button
          v-for="language in languages"
          :key="language.code"
          @click="selectLanguage(language.code)"
          class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 flex items-center space-x-2"
          :class="{ 'bg-gray-50 dark:bg-gray-700': locale === language.code }"
        >
          <!-- Language Flag Indicator -->
          <span class="w-5 h-5 inline-flex items-center justify-center">
            {{ getFlagEmoji(language.code) }}
          </span>
          <span>{{ language.label }}</span>
          
          <!-- Checkmark for selected language -->
          <svg
            v-if="locale === language.code"
            class="w-4 h-4 ml-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const isLoading = ref(false)

const languages = [
  { code: 'en-US', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' }
]

// Function to get flag emoji based on language code
const getFlagEmoji = (langCode: string) => {
  const flagEmojis: { [key: string]: string } = {
    'en-US': '🇺🇸',
    'es': '🇪🇸',
    'fr': '🇫🇷',
    'de': '🇩🇪',
    'pt': '🇵🇹'
  }
  return flagEmojis[langCode] || '🌐'
}

const selectLanguage = async (code: string) => {
  isLoading.value = true
  try {
    locale.value = code
    localStorage.setItem('userLanguage', code)
  } finally {
    setTimeout(() => {
      isLoading.value = false
      isOpen.value = false
    }, 300) // Add a small delay to show the loading animation
  }
}

// Set initial language from localStorage or browser preference
const initLanguage = () => {
  const savedLanguage = localStorage.getItem('userLanguage')
  if (savedLanguage) {
    locale.value = savedLanguage
  } else {
    // Get browser language
    const browserLang = navigator.language.split('-')[0]
    const supportedLang = languages.find(lang => lang.code.startsWith(browserLang))
    if (supportedLang) {
      locale.value = supportedLang.code
      localStorage.setItem('userLanguage', supportedLang.code)
    }
  }
}

// Initialize language on component mount
initLanguage()

// Add method to get current language label
const getCurrentLanguageLabel = () => {
  const currentLang = languages.find(lang => lang.code === locale.value)
  return currentLang ? currentLang.label : 'English'
}
</script>
