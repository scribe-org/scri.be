<template>
  <div class="min-h-screen bg-layer-0">
    <!-- Navigation -->
    <nav class="p-4 flex justify-between items-center bg-layer-1">
      <div class="text-3xl font-display text-primary-text flex items-center">
        <span>{{ $t('_global.home') }}</span>
        <svg class="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="flex items-center gap-4">
        <ThemeToggle />
        <a href="#" class="text-link-text hover:text-link-text-hover">{{ $t('_global.about') }}</a>
        <a href="#" class="text-link-text hover:text-link-text-hover">{{ $t('_global.help') }}</a>
        <a href="#" class="text-link-text hover:text-link-text-hover">{{ $t('_global.version') }}</a>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Language Keyboards Section -->
      <div class="flex items-center justify-between mb-20">
        <div class="w-1/2 pr-8">
          <h2 class="responsive-h2 text-primary-text mb-4">Language Keyboards</h2>
          <p class="text-distinct-text mb-4">
            Create your own virtual keyboards for any language with ease. 
            Support text processing in any script style, process user input, 
            and optimize the typing experience.
          </p>
          <button class="style-cta btn-base-class">
            Learn more
          </button>
        </div>
        <div class="w-1/2 bg-layer-2 h-64 rounded-lg card-style"></div>
      </div>

      <!-- Conjugate Section -->
      <div class="flex items-center justify-between">
        <div class="w-1/2 bg-layer-2 h-64 rounded-lg card-style"></div>
        <div class="w-1/2 pl-8">
          <h2 class="responsive-h2 text-primary-text mb-4">Conjugate</h2>
          <p class="text-distinct-text mb-4">
            Process and transform text with powerful conjugation rules. 
            Apply complex language patterns and create dynamic text processing solutions.
          </p>
          <button class="style-cta btn-base-class">
            Learn more
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import ThemeToggle from '../components/ThemeToggle.vue'
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap");

:root {
  --layer-0: 255, 255, 255;
  --layer-1: 246, 248, 250;
  --layer-2: 240, 240, 235;
  --primary-text: 0, 0, 0;
  --distinct-text: 90, 90, 90;
  --link-text: 0, 92, 184;
  --link-text-hover: 0, 59, 119;
  --interactive: 75, 75, 67;
  --highlight: 140, 140, 140;
  --cta-orange: 242, 166, 84;
}

.dark {
  --layer-0: 6, 8, 15;
  --layer-1: 19, 19, 22;
  --layer-2: 22, 27, 34;
  --primary-text: 255, 255, 255;
  --distinct-text: 150, 150, 150;
  --link-text: 86, 167, 252;
  --link-text-hover: 134, 192, 253;
  --interactive: 133, 126, 123;
  --highlight: 70, 70, 70;
  --cta-orange: 241, 156, 65;
}
</style> 