<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <button
    :id="id"
    :aria-label="$t(ariaLabel)"
    class="btn-base-class rounded-md xl:rounded-lg"
    :class="btnDynamicClass"
  >
    <BtnIconsLabel
      :counter="counter"
      :hideLabelOnMobile="hideLabelOnMobile"
      :iconSize="iconSize"
      :label="label"
      :leftIcon="leftIcon"
      :rightIcon="rightIcon"
    />
  </button>
</template>

<script setup lang="ts">
import type { BtnAction } from "#shared/types/btn-props";

const props = defineProps<BtnAction>();

const btnDynamicClass = getBtnDynamicClass(props.cta, props.fontSize);
</script>
