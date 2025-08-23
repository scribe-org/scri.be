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
      <div v-else v-html="renderedMarkdown" class="prose"></div>
    </div>
  </PageDocs>
</template>

<script setup>
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const markdownContent = ref(""); // API content goes here

const renderedMarkdown = computed(() => {
  return md.render(markdownContent.value);
});

// Fetch changelog content
onMounted(async () => {
  const response = await $fetch(
    "https://api.github.com/repos/scribe-org/Scribe-Data/contents/CHANGELOG.md"
  );
  const changelog = atob(response.content);
  markdownContent.value = changelog;
});
</script>

<style>
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
</style>
