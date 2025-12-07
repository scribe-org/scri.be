<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="grid w-fit grid-flow-row gap-3 sm:grid-flow-col md:gap-5">
    <ShieldCommunity
      class="fill-primary-text"
      href="https://github.com/scribe-org"
      :isLoading="false"
    >
      <Icon :name="IconMap.GITHUB" size="2em" />
      <div class="ml-4 place-self-center pb-1">
        <div class="ml-0.5 text-xs font-semibold leading-4">
          {{ $t("i18n.components.grid_community_shields.visit_us") }}
        </div>
        <div class="text-2xl font-semibold leading-4">
          {{ $t("i18n.components._global.github") }}
        </div>
      </div>
    </ShieldCommunity>
    <ShieldCommunity
      class="fill-primary-text"
      href="https://matrix.to/#/#scribe_community:matrix.org"
      :isLoading="false"
    >
      <Icon :name="IconMap.MATRIX" size="2em" />
      <div class="ml-4 place-self-center pb-1">
        <div class="ml-0.5 text-xs font-semibold leading-4">
          {{ $t("i18n.components.grid_community_shields.join_us") }}
        </div>
        <div class="text-2xl font-semibold leading-4">
          {{ $t("i18n.components._global.matrix") }}
        </div>
      </div>
    </ShieldCommunity>
    <!-- <ShieldCommunity
      class="fill-primary-text"
      href="https://github.com/scribe-org/Scribe-iOS/forks"
      :text="$t('i18n.components.grid_community_shields.fork')"
      :isLoading="isLoading"
      :count="GitHubData.forks_count"
    >
      <Icon :name="IconMap.FORK" size="2em" />
    </ShieldCommunity>
    <ShieldCommunity
      class="fill-primary-text"
      href="https://github.com/scribe-org/Scribe-iOS/stargazers"
      :text="$t('i18n.components.grid_community_shields.star')"
      :isLoading="isLoading"
      :count="GitHubData.stargazers_count"
    >
      <Icon :name="IconMap.STAR" size="2em" />
    </ShieldCommunity> -->
  </div>
</template>

<script setup lang="ts">
// const isLoading = ref(false);
// const GitHubData = reactive({
//   forks_count: 0,
//   stargazers_count: 0,
// });

// onMounted(() => {
//   fetchDataFromGitHubAPI();
// });

// async function fetchDataFromGitHubAPI() {
//   isLoading.value = true;
//   try {
//     const response = await fetch("https://api.github.com/repos/scribe-org");
//     const data = await response.json();
//     GitHubData.forks_count = data.forks_count;
//     GitHubData.stargazers_count = data.stargazers_count;
//   } catch (error) {
//     console.error(error);
//   } finally {
//     isLoading.value = false;
//   }
// }
</script>
