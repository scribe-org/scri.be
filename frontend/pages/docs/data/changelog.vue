<template>
  <PageDocs
    imgURL="/icons/docs/bootstrap_file_code"
    imgAltText="i18n.pages.docs._global.changelog.file_code_img_alt_text"
  >
    <PageBreadcrumbs />
    <div>
      <div v-if="loading">
Loading changelog...
</div>
      <div v-else-if="error">
Error: {{ error }}
</div>
      <div v-else class="changelog-container">
        <div v-html="htmlContent" class="prose"></div>
      </div>
    </div>
  </PageDocs>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const md = useMarkdown();
const { base64ToUTF8 } = useBase64Decoder();
// This ref will hold the raw Markdown string
const markdownContent = ref("");

// HTML based on the markdownContent ref
const htmlContent = computed(() => {
  return md.render(markdownContent.value);
});

const loading = ref(true);
const error = ref(null);

// Fetch changelog content
onMounted(async () => {
  try {
    const response = await $fetch(
      "https://api.github.com/repos/scribe-org/Scribe-Data/contents/CHANGELOG.md"
    );
    // decode the content
    const changelog = base64ToUTF8(response.content);
    markdownContent.value = changelog;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style>
/* CSS for the scrolling container */
.changelog-container {
  height: 80vh; /* Adjust as needed */
  overflow-y: auto;
  border: 1px solid #ccc; /* For visualization */
  padding: 1rem;
}

.prose h1,
.prose h2,
.prose h3 {
  font-weight: bold;
  margin: 1rem 0;
}
.prose h1 {
  padding-bottom: 0.5rem;
  font-weight: 700;
}
.prose h2 {
  font-size: 1.5rem;
}
.prose h3 {
  font-size: 1.25rem;
}

/* sticky CSS */
.version-section {
  padding-top: 1px;
}
.version-section h2 {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  z-index: 10;
}
</style>
