<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <PageDocs
    imgAltText="i18n.pages.docs._global.changelog.file_code_img_alt_text"
    imgURL="/icons/docs/bootstrap_file_code"
  >
    <PageBreadcrumbs />
    <div>
      <div v-if="loading">
        {{ $t("i18n.pages.docs._global.changelog.loading_changelog") }}
      </div>
      <div v-else-if="error">
        {{
          $t("i18n.pages.docs._global.changelog.error", {
            error: error,
          })
        }}
      </div>
      <div v-else class="changelog-container">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="htmlContent" class="prose"></div>
      </div>
    </div>
  </PageDocs>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const md = useMarkdown();
const { base64ToUTF8 } = useBase64Decoder();

const markdownContent = ref<string>("");
const htmlContent = computed(() => md.render(markdownContent.value));
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

type GitHubContent = { content: string };

// Fetch changelog content.
onMounted(async () => {
  try {
    const response = await $fetch<GitHubContent>(
      "https://api.github.com/repos/scribe-org/Scribe-Data/contents/CHANGELOG.md"
    );
    // Decode the content.
    const changelog = base64ToUTF8(response.content);
    markdownContent.value = changelog;
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = String(err);
    }
  } finally {
    loading.value = false;
  }
});
</script>
