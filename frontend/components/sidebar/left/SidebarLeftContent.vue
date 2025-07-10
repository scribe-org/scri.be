<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex flex-col space-y-2 transition-all duration-500">
    <DropdownProjects class="w-full" :location="DropdownLocation.SIDE_MENU" />
    <DropdownCommunity class="w-full" :location="DropdownLocation.SIDE_MENU" />
    <DropdownLegal class="w-full" :location="DropdownLocation.SIDE_MENU" />
  </div>
</template>

<script setup lang="ts">
import { DropdownLocation } from "~/types/location";
</script>
