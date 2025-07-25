<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div>
    <ul class="flex flex-wrap justify-center gap-4 md:justify-normal">
      <li v-for="item in githubData" :key="item.loginID">
        <NuxtLink
          class="focus-brand flex w-20 flex-col items-center space-y-1"
          :to="localePath(item.htmlUrl)"
        >
          <img
            class="ring-light-section-div hover:ring-light-cta-orange dark:ring-dark-section-div dark:hover:ring-light-cta-orange dark:hover:ring-offset-dark-layer-0 h-16 w-16 rounded-full ring-2 hover:ring-2 hover:ring-offset-2"
            :src="item.avatarUrl"
            :alt="
              $t('i18n.components.grid_git_hub_contributors.img_alt_text', {
                github_user_id: item.loginID,
              })
            "
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
          class="focus-brand flex w-20 flex-col items-center space-y-1"
          :aria-label="
            $t('i18n.components.grid_git_hub_contributors.load_more_aria_label')
          "
        >
          <span
            class="bg-light-section-div ring-light-section-div hover:ring-light-cta-orange dark:bg-dark-section-div dark:ring-dark-section-div dark:hover:ring-light-cta-orange dark:hover:ring-offset-dark-layer-0 flex h-16 w-16 items-center justify-center rounded-full ring-2 hover:ring-2 hover:ring-offset-2"
            :alt="
              $t(
                'i18n.components.grid_git_hub_contributors.load_more_img_alt_text'
              )
            "
          >
            <Icon
              name="bx:dots-horizontal-rounded"
              size="3em"
              class="text-light-text dark:text-dark-text"
            />
          </span>
          <p
            class="text-light-text hover:text-light-text dark:text-dark-text dark:hover:text-dark-text w-full truncate text-center text-sm"
          >
            {{ $t("i18n.components.grid_git_hub_contributors.load_more") }}
          </p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

interface GithubContributor {
  avatarUrl: string;
  htmlUrl: string;
  loginID: string;
}

interface GithubContributorResponse {
  avatar_url: string;
  html_url: string;
  login: string;
}

const isLoading = ref<boolean>(false);
const githubData = ref<GithubContributor[]>([]);
const currentPage = ref<number>(1);
const hasMoreContributors = ref<boolean>(true);

onMounted(() => {
  fetchDataFromGitHubAPI(currentPage.value);
});

async function fetchDataFromGitHubAPI(page: number, numPerPage: number = 30) {
  isLoading.value = true;
  try {
    const response = await fetch(
      `https://api.github.com/repos/scribe-org/Scribe-Android/contributors?per_page=${numPerPage}&page=${page}`
    );
    const data = await response.json();

    if (data.length < numPerPage) {
      hasMoreContributors.value = false;
    }

    githubData.value = githubData.value.concat(
      data.map((item: GithubContributorResponse) => {
        return {
          avatarUrl: item.avatar_url,
          htmlUrl: item.html_url,
          loginID: item.login,
        };
      })
    );
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

function onClickLoadMoreContributors() {
  currentPage.value++;
  fetchDataFromGitHubAPI(currentPage.value);
}
</script>
