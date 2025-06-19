<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <header
    ref="header"
    id="header"
    class="sticky top-0 z-10 duration-500"
    :class="{
      'bg-scribe-blue': headerOpacity == 1,
      'bg-scribe-blue/80 drop-shadow-md': headerOpacity == 0.8,
      'invisible opacity-0 drop-shadow-md': headerOpacity == 0,
    }"
  >
    <!-- MARK: Mobile Header -->
    <div
      v-if="!aboveMediumBP"
      id="mobile-header"
      class="flex justify-end px-4 py-3"
    >
      <SidebarRight>
        <div class="flex-col space-y-2">
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
    <div v-if="aboveMediumBP" id="desktop-header" class="mx-auto py-3">
      <div class="responsive-px-5 flex items-center justify-end">
        <div>
          <div class="flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
            <DropdownTheme />
            <DropdownLanguage />
            <BtnRouteInternal
              v-if="aboveLargeBP"
              id="btn-get-in-touch-large"
              class="block"
              :cta="true"
              label="i18n.components.header_website.support"
              linkTo="/"
              fontSize="sm"
              ariaLabel="i18n.components.header_website.support_aria_label"
            />
            <BtnRouteInternal
              v-else-if="aboveMediumBP"
              id="btn-get-in-touch-medium"
              class="block"
              :cta="true"
              label="i18n.components.header_website.support"
              linkTo="/"
              fontSize="xs"
              ariaLabel="i18n.components.header_website.support_aria_label"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { DropdownLocation } from "~/types/location";

const aboveMediumBP = useBreakpoint("md");
const aboveLargeBP = useBreakpoint("lg");

const headerOpacity: Ref<number> = ref(1);
const prevScrollY: Ref<number> = ref(0);

function handleScroll() {
  const scrollY = window.scrollY;

  if (scrollY > document.getElementsByTagName("header")[0].clientHeight) {
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
