<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <button
      @click="$emit('toggle')"
      id="sidebar-right-hamburger"
      class="focus-brand group relative z-50 outline-offset-4"
      :aria-label="
        $t('i18n.components.sidebar_right_hamburger.collapse_aria_label')
      "
    >
      <div
        class="relative flex h-[20px] w-[30px] transform items-center justify-center bg-transparent transition-all duration-200"
      >
        <span
          class="duration-250 absolute left-0 top-0 h-[0.2rem] w-full transform rounded-full bg-primary-text transition-all ease-in-out"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
          class="duration-250 absolute left-0 top-1/2 h-[0.2rem] w-full -translate-y-1/2 transform rounded-full bg-primary-text transition-all ease-in-out"
          :class="{ 'rotate-45': menuOpen }"
        ></span>
        <span
          class="duration-250 absolute left-0 top-1/2 h-[0.2rem] w-full -translate-y-1/2 transform rounded-full bg-primary-text transition-all ease-in-out"
          :class="{ '-rotate-45': menuOpen }"
        ></span>
        <span
          class="duration-250 absolute bottom-0 left-0 h-[0.2rem] w-full transform rounded-full bg-primary-text transition-all ease-in-out"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  menuOpen: boolean;
}
withDefaults(defineProps<Props>(), {
  menuOpen: false,
});
defineEmits(["toggle"]);
</script>
