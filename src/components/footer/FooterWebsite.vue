<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 
                 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] relative">
    <!-- Add subtle background pattern -->
    <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
    
    <div class="max-w-7xl mx-auto px-4 py-8 relative">
      <!-- Main Footer Content -->
      <div class="flex flex-col lg:flex-row justify-between gap-8">
        <!-- Left Section: Company Info -->
        <div class="lg:max-w-xs space-y-4">
          <img src="@/assets/scribe.svg" alt="Scribe" class="h-6 hover:opacity-80 transition-opacity" />
          <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
            Building the future of language learning and processing technology.
          </p>
          <div class="flex space-x-3">
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <GithubIcon class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <MatrixIcon class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <MastodonIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Center Section: Links -->
        <div class="flex flex-wrap gap-8 lg:gap-16">
          <!-- Products -->
          <div class="hover:translate-y-[-2px] transition-transform">
            <h3 class="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
              Products
            </h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
                  Language Keyboards
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
                  Conjugation Tools
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
                  Infrastructure
                </a>
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div class="hover:translate-y-[-2px] transition-transform">
            <h3 class="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
              Company
            </h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <!-- Apps Section -->
          <div class="min-w-[160px]">
            <h3 class="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
              Download
            </h3>
            <div class="space-y-2">
              <!-- App Store -->
              <a href="#" class="block transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div class="bg-black/90 text-white rounded-md px-3 py-2 flex items-center gap-2 
                            border border-white/10 backdrop-blur-sm">
                  <AppStoreIcon class="w-5 h-5 flex-shrink-0 text-white/90" />
                  <div class="leading-tight min-w-0">
                    <div class="text-[9px] whitespace-nowrap opacity-70">Download on the</div>
                    <div class="text-xs font-semibold whitespace-nowrap">App Store</div>
                  </div>
                </div>
              </a>

              <!-- Google Play -->
              <a href="#" class="block transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div class="bg-black/90 text-white rounded-md px-3 py-2 flex items-center gap-2 
                            border border-white/10 backdrop-blur-sm">
                  <GooglePlayIcon class="w-5 h-5 flex-shrink-0 text-white/90" />
                  <div class="leading-tight min-w-0">
                    <div class="text-[9px] whitespace-nowrap opacity-70">GET IT ON</div>
                    <div class="text-xs font-semibold whitespace-nowrap">Google Play</div>
                  </div>
                </div>
              </a>

              <!-- F-Droid -->
              <a href="#" class="block transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div class="bg-[#1976D2]/90 text-white rounded-md px-3 py-2 flex items-center gap-2 
                            border border-white/10 backdrop-blur-sm">
                  <FDroidIcon class="w-5 h-5 flex-shrink-0 text-white/90" />
                  <div class="leading-tight min-w-0">
                    <div class="text-[9px] whitespace-nowrap opacity-70">GET IT ON</div>
                    <div class="text-xs font-semibold whitespace-nowrap">F-Droid</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p class="text-gray-500 dark:text-gray-400 text-xs">
            © 2024 Scribe. All rights reserved.
          </p>
          <div class="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
              Privacy
            </a>
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
              Terms
            </a>
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { GithubIcon, MatrixIcon, MastodonIcon, AppStoreIcon, GooglePlayIcon, FDroidIcon } from '@/components/icons'
</script>
