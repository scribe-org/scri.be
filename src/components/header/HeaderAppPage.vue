<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex items-center">
    <div class="flex items-center">
      <img 
        src="@/assets/scribe.svg" 
        :alt="$t('_global.activist_icon_img_alt_text')"
        class="h-8 w-auto"
      />
    </div>
    <div class="hidden md:flex items-center">
      <span class="text-xl font-display text-white dark:text-primary-text">
        {{ $t('_global.home') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
