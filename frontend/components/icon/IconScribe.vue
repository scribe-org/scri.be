<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <NuxtLink class="focus-brand" :to="localePath('/')">
    <svg
      width="216"
      height="117"
      viewBox="0 0 216 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_405_524)">
        <path
          d="M36.9608 36.5728H149.165M10.9709 53.0693V100.59C10.9709 100.747 11.0333 100.899 11.1442 101.01C11.2551 101.122 11.4056 101.184 11.5625 101.184H161.624C161.706 101.186 161.789 101.171 161.865 101.139C161.942 101.107 162.01 101.059 162.067 100.999L204.953 53.5152C205.046 53.407 205.098 53.2684 205.098 53.125C205.098 52.9817 205.046 52.8431 204.953 52.7349L161.993 5.17727C161.936 5.11683 161.868 5.06906 161.791 5.03706C161.715 5.00506 161.632 4.98954 161.55 4.9915H11.5625C11.4056 4.9915 11.2551 5.05413 11.1442 5.16561C11.0333 5.2771 10.9709 5.42831 10.9709 5.58597V53.0693Z"
          stroke="white"
          stroke-width="10"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_405_524"
          x="0.970947"
          y="-0.00866699"
          width="214.127"
          height="116.193"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_405_524"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_405_524"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <span class="sr-only">{{
      $t("i18n.components._global.navigate_to_start")
    }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

defineProps<{
  color?: string;
}>();
</script>
