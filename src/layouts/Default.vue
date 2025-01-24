<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex flex-col min-h-screen w-screen">
    <!-- Fixed Navigation -->
    <nav 
      :class="[
        'fixed top-0 left-0 w-screen z-50 transition-all duration-300',
        { '-translate-y-full': isScrolled && !isHovered }
      ]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="w-full bg-[#4B9EF9] dark:bg-[#4B9EF9] shadow-md backdrop-blur-sm">
        <div class="w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
          <HeaderAppPage />
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-5">
            <DropdownLanguage />
            <DropdownTheme />
            <div class="group flex items-center gap-2 px-4 py-2 border border-white/30 rounded-md 
                        hover:border-white hover:bg-white/10 transition-all duration-300 
                        backdrop-blur-sm shadow-sm hover:shadow-white/20 
                        cursor-pointer font-medium">
              <span>Apps</span>
              <svg 
                class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" 
                    class="p-2 hover:bg-white/10 rounded-full transition-colors">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <!-- Mobile Menu Dropdown -->
            <div v-if="isMobileMenuOpen" 
                 class="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 
                        rounded-lg shadow-lg py-2 mx-4">
              <div class="px-4 py-2 border-b dark:border-gray-700">
                <DropdownTheme />
              </div>
              <div class="px-4 py-2 border-b dark:border-gray-700">
                <DropdownLanguage />
              </div>
              <div class="px-4 py-2 flex items-center gap-2 text-gray-700 dark:text-gray-200
                          hover:bg-gray-100 dark:hover:bg-gray-700">
                <span>Apps</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Spacer for fixed navbar -->
    <div class="h-[56px] w-screen"></div>

    <!-- Hero Banner -->
    <div class="w-screen min-h-[70vh] bg-[#589DE9] dark:bg-[#589DE9] text-white flex flex-col items-center justify-center relative overflow-hidden">
      <!-- Logo Container with better scaling -->
      <div class="flex-1 flex items-center justify-center transform hover:scale-105 transition-all duration-500">
        <img 
          src="@/assets/scribe.svg" 
          alt="Scribe Logo" 
          class="w-80 md:w-[520px] lg:w-[580px] mx-auto"
        />
      </div>
      
      <!-- Enhanced divider -->
      <div class="w-full max-w-4xl mx-auto px-4 mb-12">
        <div class="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>
      
      <!-- Optimized social links -->
      <div class="pb-12 px-4">
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <a 
            href="https://github.com/scribe" 
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 border border-white/30 rounded-md px-5 py-2.5 
                   hover:border-white hover:bg-white/10 transition-all duration-300 
                   backdrop-blur-sm shadow-lg hover:shadow-white/20"
          >
            <GithubIcon class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            <span class="text-sm font-medium tracking-wide">Github</span>
          </a>
          <a 
            href="https://matrix.to/#/#scribe:matrix.org" 
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 border border-white/30 rounded-md px-5 py-2.5 
                   hover:border-white hover:bg-white/10 transition-all duration-300 
                   backdrop-blur-sm shadow-lg hover:shadow-white/20"
          >
            <MatrixIcon class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            <span class="text-sm font-medium tracking-wide">Matrix</span>
          </a>
          <a 
            href="https://mastodon.social/@scribe" 
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 border border-white/30 rounded-md px-5 py-2.5 
                   hover:border-white hover:bg-white/10 transition-all duration-300 
                   backdrop-blur-sm shadow-lg hover:shadow-white/20"
          >
            <MastodonIcon class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            <span class="text-sm font-medium tracking-wide">Mastodon</span>
          </a>
        </div>
      </div>

      <!-- Enhanced background decoration -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-transparent to-blue-900/30"></div>
        <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-500/30 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="w-screen bg-layer-0 dark:bg-layer-2 text-primary-text">
      <div class="max-w-7xl mx-auto px-4 py-24">
        <!-- Language Keyboards Section -->
        <section class="mb-40 transform hover:scale-[1.02] transition-all duration-500">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="w-full md:w-1/2">
              <h2 class="text-3xl font-bold text-primary-text mb-4">Language Keyboards</h2>
              <p class="text-distinct-text mb-6">
                Create your own virtual keyboards for any language with ease. Support text processing in any script style.
              </p>
              <a href="#" class="text-link-text hover:text-link-text-hover transition-colors">Learn more →</a>
            </div>
            <div class="w-full md:w-1/2 bg-gray-100 dark:bg-layer-0 rounded-lg h-64 shadow-md"></div>
          </div>
        </section>

        <!-- Conjugate Section -->
        <section class="mb-40 transform hover:scale-[1.02] transition-all duration-500">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="w-full md:w-1/2 bg-gray-100 dark:bg-layer-0 rounded-lg h-64 shadow-md order-2 md:order-1"></div>
            <div class="w-full md:w-1/2 order-1 md:order-2">
              <h2 class="text-3xl font-bold text-primary-text mb-4">Conjugate</h2>
              <p class="text-distinct-text mb-6">
                Process and transform text with powerful conjugation rules. Apply complex language patterns.
              </p>
              <a href="#" class="text-link-text hover:text-link-text-hover transition-colors">Learn more →</a>
            </div>
          </div>
        </section>

        <!-- Infrastructure Section -->
        <section class="mb-40 transform hover:scale-[1.02] transition-all duration-500">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="w-full md:w-1/2">
              <h2 class="text-3xl font-bold text-primary-text mb-4">Infrastructure</h2>
              <p class="text-distinct-text mb-6">
                Build scalable language processing solutions with our robust infrastructure.
              </p>
              <a href="#" class="text-link-text hover:text-link-text-hover transition-colors">Learn more →</a>
            </div>
            <div class="w-full md:w-1/2 bg-gray-100 dark:bg-layer-0 rounded-lg h-64 shadow-md"></div>
          </div>
        </section>

        <!-- Supporters Grid -->
        <section class="mb-32">
          <h2 class="text-3xl font-bold text-primary-text mb-8 text-center">Supporters</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="n in 8" :key="n" class="bg-gray-100 dark:bg-layer-0 rounded-lg h-32 shadow-md"></div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <FooterWebsite />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import HeaderAppPage from '@/components/header/HeaderAppPage.vue'
import DropdownLanguage from '@/components/dropdown/DropdownLanguage.vue'
import FooterWebsite from '@/components/footer/FooterWebsite.vue'
import DropdownTheme from '@/components/dropdown/DropdownTheme.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import MatrixIcon from '@/components/icons/MatrixIcon.vue'
import MastodonIcon from '@/components/icons/MastodonIcon.vue'

const isScrolled = ref(false)
const isHovered = ref(false)
let lastScrollY = 0
let scrollTimeout: number | null = null

const handleScroll = () => {
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
  }

  scrollTimeout = window.setTimeout(() => {
    const scrollY = window.scrollY
    isScrolled.value = scrollY > lastScrollY && scrollY > 50
    lastScrollY = scrollY
  }, 100)
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-button')) {
      isMobileMenuOpen.value = false
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
  }
})
</script>

<style>
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fix viewport width */
:root {
  overflow-x: hidden;
  width: 100vw;
}

html, body {
  width: 100vw !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  position: relative;
}

#app {
  width: 100vw !important;
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0 !important;
  padding: 0 !important;
}

/* Force full width on all sections */
.w-screen {
  width: 100vw !important;
  max-width: 100vw !important;
  min-width: 100vw !important;
  margin: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Add responsive classes for the hero section */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
}
</style> 