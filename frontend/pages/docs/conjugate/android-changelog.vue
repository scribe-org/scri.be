<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <PageDocs
    imgURL="/icons/docs/bootstrap_file_code"
    imgAltText="i18n.pages.docs._global.changelog.file_code_img_alt_text"
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

<script setup>
import { computed, onMounted, ref } from "vue";

const md = useMarkdown();
const { base64ToUTF8 } = useBase64Decoder();
// This ref will hold the raw Markdown string.
const markdownContent = ref("");

// HTML based on the markdownContent ref.
const htmlContent = computed(() => {
  return md.render(markdownContent.value);
});

const loading = ref(true);
const error = ref(null);

// Fetch changelog content.
onMounted(async () => {
  try {
    const response = await $fetch(
      "https://api.github.com/repos/scribe-org/Scribe-Android/contents/CHANGELOG_CONJUGATE.md"
    );
    // Decode the content.
    const changelog = base64ToUTF8(response.content);
    markdownContent.value = changelog;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>
