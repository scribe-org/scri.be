<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <ul
    :class="{
      'flex flex-wrap justify-center gap-4': true,
      'md:justify-normal': !alwaysCentered,
    }"
  >
    <li v-for="item in githubShownData" :key="item.loginID">
      <NuxtLink
        class="flex w-20 flex-col items-center space-y-1 focus-brand"
        target="_blank"
        :to="localePath(item.htmlUrl)"
      >
        <img
          :alt="
            $t('i18n.components.grid_git_hub_contributors.img_alt_text', {
              github_user_id: item.loginID,
            })
          "
          class="ring-light-section-div dark:ring-dark-section-div dark:hover:ring-offset-dark-layer-0 h-16 w-16 rounded-full ring-2 hover:ring-2 hover:ring-offset-2"
          :src="item.avatarUrl"
        />
        <p
          class="text-light-text hover:text-light-text dark:text-dark-text dark:hover:text-dark-text w-full truncate text-center text-sm"
        >
          {{ item.loginID }}
        </p>
      </NuxtLink>
    </li>
    <li v-if="hasMoreContributors">
      <button
        @click="onClickLoadMoreContributors"
        :aria-label="
          $t('i18n.components.grid_git_hub_contributors.show_more_aria_label')
        "
        class="relative flex w-20 flex-col items-center space-y-1 focus-brand"
      >
        <span
          v-if="isLoading"
          class="absolute inline-flex h-[4rem] w-[4rem] animate-ping rounded-full border-4 border-scribe-blue opacity-75"
        ></span>
        <span
          :alt="
            $t(
              'i18n.components.grid_git_hub_contributors.show_more_img_alt_text'
            )
          "
          class="bg-light-section-div ring-light-section-div dark:bg-dark-section-div dark:ring-dark-section-div dark:hover:ring-offset-dark-layer-0 flex h-16 w-16 items-center justify-center rounded-full ring-2 hover:ring-2 hover:ring-offset-2"
        >
          <Icon
            class="text-light-text dark:text-dark-text"
            :name="IconMap.THREE_DOTS_HORIZONTAL"
            size="3em"
          />
        </span>
        <p
          class="text-light-text hover:text-light-text dark:text-dark-text dark:hover:text-dark-text w-full truncate text-center text-sm"
        >
          {{
            isLoading
              ? $t("i18n.components.grid_git_hub_contributors.loading")
              : $t("i18n.components.grid_git_hub_contributors.show_more")
          }}
        </p>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  alwaysCentered: {
    type: Boolean,
    default: false,
  },
});

const localePath = useLocalePath();

interface GithubContributor {
  avatarUrl: string;
  htmlUrl: string;
  loginID: string;
  contributions: number;
}

interface GithubContributorResponse {
  avatar_url: string;
  html_url: string;
  login: string;
  contributions: number;
}

const isLoading = ref<boolean>(false);
const githubData = ref<GithubContributor[]>([]);
const githubShownData = ref<GithubContributor[]>([]);
const hasMoreContributors = ref<boolean>(true);

let numberShown = 30;

onMounted(() => {
  fetchDataFromGitHubAPI();
});

async function fetchDataFromGitHubAPI() {
  isLoading.value = true;
  try {
    const scribeRepos = [
      "Scribe-Android",
      "Scribe-iOS",
      "Scribe-Data",
      "Scribe-Server",
      "Scribe-Desktop",
      "Scribe-i18n",
      "scri.be",
      "Organization",
    ];

    for (const repo of scribeRepos) {
      const response = await fetch(
        `https://api.github.com/repos/scribe-org/${repo}/contributors?per_page=100`
      );
      const data = await response.json();

      const contributors = data.map((item: GithubContributorResponse) => {
        return {
          avatarUrl: item.avatar_url,
          htmlUrl: item.html_url,
          loginID: item.login,
          contributions: item.contributions,
        };
      });

      for (const c of contributors) {
        const existingItem = githubData.value.find(
          (d) => d.loginID === c.loginID
        );

        if (existingItem) {
          existingItem.contributions += c.contributions;
        } else {
          githubData.value = githubData.value.concat(c);
        }
      }
    }

    // Sorts list by number of contributions.
    githubData.value.sort((a, b) => b.contributions - a.contributions);
    if (githubData.value.length > numberShown) {
      githubShownData.value = githubData.value.slice(0, numberShown);
    } else {
      hasMoreContributors.value = false;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

function onClickLoadMoreContributors() {
  numberShown += 30;
  if (githubData.value.length < numberShown) {
    hasMoreContributors.value = false;
    githubShownData.value = githubData.value;
  } else {
    githubShownData.value = githubData.value.slice(0, numberShown);
  }
}
</script>
