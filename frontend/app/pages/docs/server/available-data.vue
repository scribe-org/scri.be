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

    <p>{{ $t("i18n.pages.docs.server.available_data.table_description") }}</p>
    <div class="my-6 flex justify-center">
      <div class="w-full max-w-4xl overflow-x-auto">
        <table class="min-w-full divide-y divide-distinct-text">
          <thead class="bg-highlight">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-primary-text"
              >
                {{ $t("i18n.pages.docs.server.available_data.language") }}
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-primary-text"
              >
                {{ $t("i18n.pages.docs.server.available_data.nouns") }}
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-primary-text"
              >
                {{ $t("i18n.pages.docs.server.available_data.verbs") }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-distinct-text bg-layer-0">
            <tr v-for="(item, index) in languageData" :key="index">
              <td class="whitespace-nowrap px-6 py-4 text-primary-text">
                {{ item.language_name }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 text-primary-text">
                {{ item.nouns }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 text-primary-text">
                {{ item.verbs }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageDocs>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

type LanguageDataStat = Record<string, unknown>;

const languageData = ref<LanguageDataStat[]>([]);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://scribe-server.toolforge.org/api/v1/language-stats"
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} ${response.statusText}`
      );
    }

    const data = (await response.json()) as LanguageDataStat[] | null;
    languageData.value = data ?? [];
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = String(err);
    }
  }
});
</script>
