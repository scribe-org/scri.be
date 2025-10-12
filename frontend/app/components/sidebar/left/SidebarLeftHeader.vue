<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <header
    class="z-40 w-full bg-scribe-blue-lighter pl-1 transition-all duration-200 dark:bg-scribe-blue-darker"
    :class="{
      'rounded-md bg-scribe-blue-lighter elem-shadow-sm dark:bg-scribe-blue-darker':
        atTopShadow,
    }"
  >
    <div
      class="flex h-16 items-center pb-2 pl-[0.85rem] pr-6 pt-3 align-bottom"
    >
      <div
        class="relative z-0 h-auto"
        :class="{
          'w-32':
            sidebar.collapsed == false || sidebar.collapsedSwitch == false,
          'w-6': sidebar.collapsed == true && sidebar.collapsedSwitch == true,
        }"
      >
        <IconScribeSidebar
          class="z-1 absolute inset-0 flex h-[5.75rem] w-8 flex-shrink-0 items-center justify-center overflow-clip"
          :class="{
            hidden:
              sidebar.collapsed == false || sidebar.collapsedSwitch == false,
          }"
        />
        <Transition>
          <LogoScribe
            v-if="
              sidebar.collapsed == false || sidebar.collapsedSwitch == false
            "
            class="z-1 absolute inset-0 flex h-12 w-24 flex-shrink-0 items-center justify-center overflow-clip"
          />
        </Transition>
      </div>
      <!-- @mouseover.stop cancels the sidebar expansion for the button. -->
      <div @mouseover.stop class="absolute -right-0">
        <button
          @click="
            sidebar.toggleCollapsedSwitch();
            emit('toggle-pressed');
          "
          id="sidebar-left-toggle"
          class="flex h-7 w-7 items-center justify-center outline-offset-0 transition duration-200 focus-brand"
          :class="{
            '-rotate-180 pr-0.5': sidebar.collapsedSwitch == false,
            'pb-1 pl-0.5': sidebar.collapsedSwitch == true,
          }"
          :aria-label="
            $t(
              'i18n.components.sidebar_left_header.sidebar_collapse_aria_label'
            )
          "
        >
          <SidebarLeftToggle chevronDirection="right" iconSize="1.4em" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  atTopShadow: boolean;
}>();

const sidebar = useSidebar();
const emit = defineEmits(["toggle-pressed"]);
</script>

<style>
.v-enter-active {
  transition: opacity 0.25s ease;
  transition-delay: 0.125s;
}
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-from .inner {
  transition-delay: 0.25s;
}
</style>
