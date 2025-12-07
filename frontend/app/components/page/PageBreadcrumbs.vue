<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <nav :aria-label="$t('i18n.components.page_breadcrumbs.aria_label')">
    <ul class="flex flex-row flex-wrap text-sm md:text-base">
      <li
        v-for="(breadcrumb, index) in displayBreadcrumbs"
        :key="index"
        class="flex items-center font-display"
      >
        <NuxtLink
          v-if="index === 0"
          class="mx-[0.35rem] text-distinct-text focus-brand hover:text-primary-text"
          :to="localePath('/')"
        >
          &#60;
        </NuxtLink>
        <span v-else class="mx-[0.45rem] mb-[0.2rem] text-distinct-text">
          |
        </span>
        <span v-if="index !== displayBreadcrumbs.length - 1">
          <NuxtLink
            class="text-distinct-text focus-brand hover:text-primary-text"
            :to="makeURL(breadcrumb)"
          >
            {{ capitalizeFirstLetter(breadcrumb) }}
          </NuxtLink>
        </span>
        <span v-else>
          <NuxtLink
            aria-current="page"
            class="text-distinct-text focus-brand hover:text-primary-text"
            :to="makeURL(breadcrumb)"
          >
            {{ capitalizeFirstLetter(breadcrumb) }}
          </NuxtLink>
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { locales } = useI18n();
const localePath = useLocalePath();
const breadcrumbs = ref<string[]>([]);

function setBreadcrumbs() {
  const url = window.location.pathname;
  const nonEmptySegments = getNonEmptySegmentsFromURL(url);
  breadcrumbs.value = nonEmptySegments;
}

function getNonEmptySegmentsFromURL(url: string) {
  const segments = url.split("/");
  const nonEmptySegments = segments.filter((segment) => segment);
  return nonEmptySegments;
}

onMounted(() => {
  setBreadcrumbs();
});

function isLocaleSegment(segment: string) {
  return locales.value.some((locale) =>
    typeof locale === "string" ? locale === segment : locale.code === segment
  );
}

const displayBreadcrumbs = computed(() => {
  return breadcrumbs.value.filter((segment) => !isLocaleSegment(segment));
});

function makeURL(breadcrumb: string) {
  const clickedBreadcrumbIndex = breadcrumbs.value.indexOf(breadcrumb);
  const segmentsForURL = breadcrumbs.value.slice(0, clickedBreadcrumbIndex + 1);
  const url = "/" + segmentsForURL.join("/");
  return url;
}

function capitalizeFirstLetter(string: string) {
  if (string.includes("-")) {
    return string
      .replace("-", " ")
      .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
      .replace("Ios", "iOS");
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
</script>
