<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <header
    id="header"
    ref="header"
    class="sticky top-0 z-10 duration-500"
    :class="{
      'bg-scribe-blue': headerOpacity == 1,
      'bg-scribe-blue/80 drop-shadow-md': headerOpacity == 0.8,
      'invisible opacity-0 drop-shadow-md': headerOpacity == 0,
    }"
  >
    <!-- MARK: Mobile Header -->
    <div
      id="mobile-header"
      v-if="!aboveMediumBP"
      class="flex justify-end px-4 py-3"
    >
      <SidebarRight>
        <div class="flex flex-col space-y-2">
          <BtnRouteInternal
            id="btn-get-in-touch-large"
            ariaLabel="i18n.components._global.view_docs_aria_label"
            class="flex w-full border-0 bg-layer-0 hover:bg-highlight dark:hover:bg-highlight"
            :cta="true"
            fontSize="base"
            label="i18n.components._global.documentation"
            :leftIcon="IconMap.DOCUMENTATION"
            linkTo="/docs"
          />
          <DropdownTheme
            class="w-full"
            :location="DropdownLocation.SIDE_MENU"
          />
          <DropdownLanguage
            class="w-full"
            :location="DropdownLocation.SIDE_MENU"
          />
        </div>
      </SidebarRight>
    </div>
    <!-- MARK: Desktop Header -->
    <div id="desktop-header" v-if="aboveMediumBP" class="mx-auto py-3">
      <div class="responsive-px-5 flex items-center justify-end">
        <div>
          <div class="flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
            <BtnRouteInternal
              id="btn-get-in-touch-large"
              ariaLabel="i18n.components._global.view_docs_aria_label"
              class="border-0 bg-layer-0 hover:bg-highlight dark:hover:bg-highlight"
              :cta="true"
              fontSize="base"
              label="i18n.components._global.documentation"
              :leftIcon="IconMap.DOCUMENTATION"
              linkTo="/docs"
            />
            <!-- <BtnRouteInternal
              id="btn-get-in-touch-large"
              class="border-0 bg-layer-0"
              :cta="true"
              linkTo="/docs/about/support-us"
              label="i18n.components.header_website.support"
              fontSize="base"
              :leftIcon="IconMap.SUPPORT"
              ariaLabel="i18n.components.header_website.support_aria_label"
            /> -->
            <DropdownTheme />
            <DropdownLanguage />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const aboveMediumBP = useBreakpoint("md");

const headerOpacity: Ref<number> = ref(1);
const prevScrollY: Ref<number> = ref(0);

function handleScroll() {
  const scrollY = window.scrollY;

  if (scrollY > document.getElementsByTagName("header")[0]!.clientHeight) {
    if (scrollY > prevScrollY.value) {
      headerOpacity.value = 0;
    } else headerOpacity.value = 0.8;
  } else {
    headerOpacity.value = 1;
  }
  prevScrollY.value = scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.header {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
</style>
