<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <aside
    @mouseover="collapseSidebar(false)"
    @focus="collapseSidebar(false)"
    @mouseleave="collapseSidebar(true)"
    @focusout="
      collapseSidebar(true);
      handleFocusOut($event);
    "
    ref="sidebarWrapper"
    id="sidebar-left"
    role="menu"
    tabindex="0"
    class="absolute z-40 block h-full flex-col border-r border-section-div bg-scribe-blue-lighter transition-all duration-500 elem-shadow-sm focus-brand dark:bg-scribe-blue-darker md:flex"
    :class="{
      'w-56': !sidebar.collapsed || sidebar.collapsedSwitch == false,
      'w-16': sidebar.collapsed && sidebar.collapsedSwitch == true,
      'w-60':
        (!sidebar.collapsed || sidebar.collapsedSwitch == false) &&
        sidebarContentScrollable,
      'w-20':
        sidebar.collapsed &&
        sidebar.collapsedSwitch == true &&
        sidebarContentScrollable,
    }"
  >
    <SidebarLeftHeader
      @toggle-pressed="setSidebarContentScrollable()"
      :atTopShadow="applyTopShadow"
    />
    <div
      ref="content"
      class="h-full overflow-x-hidden"
      :class="{
        'overflow-y-auto':
          !sidebar.collapsed || sidebar.collapsedSwitch == false,
      }"
    >
      <SidebarLeftContent class="my-3" />
    </div>
  </aside>
</template>

<script setup lang="ts">
const sidebar = useSidebar();
const content = ref();

const sidebarContentScrollable = useState<boolean>(
  "sidebarContentScrollable",
  () => false
);
const applyTopShadow = ref(false);

function setSidebarContentScrollable(): void {
  setTimeout(() => {
    // eslint-disable-next-line vue/no-ref-as-operand
    if (content && content.value) {
      sidebarContentScrollable.value =
        content.value.scrollHeight > content.value.clientHeight ? true : false;
    }
  }, 50);
  isAtTop();
}

function isAtTop(): void {
  if (sidebarContentScrollable && content && content.value) {
    applyTopShadow.value = !(content.value.scrollTop === 0);
  }
}

const sidebarWrapper = ref<HTMLElement | null>(null);

function collapseSidebar(collapse: boolean): void {
  sidebar.collapsed = collapse;
  setSidebarContentScrollable();
}

function handleFocusOut(event: FocusEvent) {
  const focusedElement = event.relatedTarget as HTMLElement;
  if (sidebarWrapper.value && sidebarWrapper.value.contains(focusedElement)) {
    collapseSidebar(false);
  } else {
    collapseSidebar(true);
  }
}

onMounted(() => {
  window.addEventListener("resize", setSidebarContentScrollable);
  setSidebarContentScrollable();
});

onUnmounted(() => {
  window.removeEventListener("resize", setSidebarContentScrollable);
});
</script>
