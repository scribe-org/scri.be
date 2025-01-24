<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <header class="sticky top-0 z-10 bg-white/95 dark:bg-white/95 text-[#4B9EF9] backdrop-blur-sm shadow-lg">
    <div class="max-w-7xl mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <img 
            src="@/assets/scribe.svg" 
            alt="Scribe" 
            class="h-8 w-auto transform group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- Social Links -->
          <div class="flex items-center space-x-5 mr-8">
            <a 
              href="https://github.com/scribe" 
              target="_blank"
              rel="noopener noreferrer"
              class="group hover:opacity-90 transition-all duration-300"
            >
              <GithubIcon class="w-5 h-5 text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </a>
            <a 
              href="https://matrix.to/#/#scribe:matrix.org" 
              target="_blank"
              rel="noopener noreferrer"
              class="hover:opacity-80 transition-opacity"
            >
              <MatrixIcon class="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://mastodon.social/@scribe" 
              target="_blank"
              rel="noopener noreferrer"
              class="hover:opacity-80 transition-opacity"
            >
              <MastodonIcon class="w-5 h-5 text-white" />
            </a>
          </div>

          <!-- Theme and Language -->
          <div class="flex items-center space-x-3">
            <DropdownTheme />
            <DropdownLanguage />
          </div>

          <!-- Apps Button -->
          <button class="px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 hover:border-white/40 
                         transition-all duration-300 flex items-center gap-2 group">
            <span class="text-sm font-medium">Apps</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <MobileMenu class="md:hidden hover:opacity-90 transition-opacity" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import DropdownTheme from '../dropdown/DropdownTheme.vue'
import DropdownLanguage from '../dropdown/DropdownLanguage.vue'
import MobileMenu from '../dropdown/MobileMenu.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import MatrixIcon from '../icons/MatrixIcon.vue'
import MastodonIcon from '../icons/MastodonIcon.vue'
</script>

<style scoped>
.header-shadow {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
