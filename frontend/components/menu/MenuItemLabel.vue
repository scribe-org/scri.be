<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <component
    :is="infoComponent.is"
    v-bind="infoComponent"
    class="flex w-full items-center rounded-md text-sm"
    :class="{
      'group py-2 pl-4 pr-3': !isSideLeftMenu,
      'bg-scribe-blue-lighter dark:bg-scribe-blue-darker': active,
      'text-primary-text': !active,
      'relative z-0 space-x-2 p-2 text-left font-medium': isSideLeftMenu,
    }"
  >
    <Icon
      v-if="iconName"
      :name="iconName"
      size="1em"
      :class="{ 'h-5 w-5 flex-shrink-0': isSideLeftMenu }"
    />
    <Transition>
      <component
        v-if="
          !isSideLeftMenu ||
          sidebar.collapsed == false ||
          sidebar.collapsedSwitch == false
        "
        :is="infoLabel.is"
        v-bind="infoLabel"
      >
        {{ label }}
      </component>
    </Transition>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  isSideLeftMenu?: boolean | undefined;
  isButton: boolean;
  handlerClick?: () => void;
  iconName?: string | undefined;
  ariaLabel?: string | undefined;
  label: string;
  active: boolean;
}>();

const sidebar = useSidebar();

const infoComponent = computed(() => {
  return props.isButton
    ? {
        is: "button",
        onclick: props.handlerClick,
        "aria-label": props.ariaLabel,
      }
    : {
        is: "li",
      };
});

const infoLabel = computed(() => {
  return props.isButton
    ? {
        is: "p",
        class: "pl-2 pr-2",
      }
    : props.isSideLeftMenu
      ? {
          is: "p",
          class:
            "select-none whitespace-nowrap hover:menu-selection dark:hover:menu-selection",
        }
      : props.iconName
        ? {
            is: "p",
            class: "pl-2 pr-2",
          }
        : {
            is: "span",
          };
});
</script>
