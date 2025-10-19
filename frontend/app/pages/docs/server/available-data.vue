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
    <div class="my-6 flex justify-center">
      <div class="w-full max-w-4xl overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Languages
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Nouns
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Verbs
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(item, index) in languageData" :key="index">
              <td class="whitespace-nowrap px-6 py-4">
                {{ item.language_name }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ item.nouns }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ item.verbs }}
              </td>
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
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        "https://scribe-server.toolforge.org/api/v1/language-stats"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.languageData = data || [];
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>
