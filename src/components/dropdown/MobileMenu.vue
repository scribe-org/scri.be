<template>
  <div class="relative md:hidden">
    <button
      @click="isOpen = !isOpen"
      class="p-2 rounded hover:opacity-80 transition-opacity text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 text-gray-900 dark:text-gray-100"
    >
      <!-- Social Links -->
      <div class="px-4 py-2 flex justify-around border-b dark:border-gray-700">
        <a href="https://github.com/scribe" class="hover:opacity-80 transition-opacity">
          <GithubIcon class="w-5 h-5" />
        </a>
        <a href="https://matrix.to/#/#scribe:matrix.org" class="hover:opacity-80 transition-opacity">
          <MatrixIcon class="w-5 h-5" />
        </a>
        <a href="https://mastodon.social/@scribe" class="hover:opacity-80 transition-opacity">
          <MastodonIcon class="w-5 h-5" />
        </a>
      </div>

      <!-- Theme and Language -->
      <div class="px-4 py-2 border-b dark:border-gray-700">
        <DropdownTheme />
      </div>
      <div class="px-4 py-2 border-b dark:border-gray-700">
        <DropdownLanguage />
      </div>

      <!-- Apps -->
      <div class="px-4 py-2">
        <button class="w-full text-left hover:opacity-80 transition-opacity">
          Apps
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropdownTheme from './DropdownTheme.vue'
import DropdownLanguage from './DropdownLanguage.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import MatrixIcon from '../icons/MatrixIcon.vue'
import MastodonIcon from '../icons/MastodonIcon.vue'

const isOpen = ref(false)
</script> 