<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex flex-col space-y-2 px-1 pt-4 transition-all duration-500">
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
import { DropdownLocation } from "~/types/location";
</script>
