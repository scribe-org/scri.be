<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->

<template>
  <PageDocs
    imgURL="/icons/docs/bootstrap_clipboard_data"
    imgAltText="i18n.pages.docs.server._global.clipboard_data_img_alt_text"
  >
    <PageBreadcrumbs />
    <h1 class="pb-2 font-bold">
      {{ $t("i18n._global.available_data") }}
    </h1>

    <p>{{ $t("i18n.pages.docs.server.available_data.under_development") }}</p>
    <div class="flex justify-center my-6">
      <div class="w-full max-w-4xl overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Languages</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nouns</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verbs</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in languageData" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">{{ item.language_name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ item.nouns }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ item.verbs }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageDocs>

</template>

<script>
export default {
data() {
  return {
    languageData: [],
    error: null
  }
},
async mounted() {
  try {
  const response = await fetch('https://scribe-server.toolforge.org/api/v1/language-stats');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    this.languageData = data || [];
    } catch (error) {
      this.error = error.message;
      console.error('Error fetching data:', error);
    }
  }
}
</script>
