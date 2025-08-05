<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex flex-col space-y-2 px-1 pt-4 transition-all duration-500">
    <BtnRouteInternal
      id="btn-get-in-touch-large"
      class="flex w-full border-0 bg-layer-0 hover:bg-highlight dark:hover:bg-highlight"
      :cta="true"
      linkTo="/docs"
      label="i18n.components._global.documentation"
      fontSize="base"
      :leftIcon="IconMap.DOCUMENTATION"
      ariaLabel="i18n.components._global.view_docs_aria_label"
    />
    <DropdownLanguageKeyboards
      class="w-full"
      :location="DropdownLocation.SIDE_MENU"
    />
    <DropdownConjugate class="w-full" :location="DropdownLocation.SIDE_MENU" />
    <DropdownData class="w-full" :location="DropdownLocation.SIDE_MENU" />
    <DropdownServer class="w-full" :location="DropdownLocation.SIDE_MENU" />
    <DropdownAbout class="w-full" :location="DropdownLocation.SIDE_MENU" />
    <DropdownLegal class="w-full" :location="DropdownLocation.SIDE_MENU" />
  </div>
</template>

<script setup lang="ts">
import { IconMap } from "~/types/icon-map";
import { DropdownLocation } from "~/types/location";
</script>
