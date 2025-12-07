<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div class="flex-col">
    <h4 class="font-bold">
      {{ $t("i18n.components.page_community_footer.invite_text_1") }}
    </h4>
    <ul class="list-disc space-y-1 pb-1 pl-4 pt-3">
      <li>
        {{ $t("i18n.components.page_community_footer.invite_text_2_1") }}
        <a
          class="link-text items-center focus-brand"
          href="https://github.com/scribe-org"
          target="_blank"
        >
          {{ $t("i18n.components.page_community_footer.on_github") }}
          <Icon
            :name="IconMap.EXTERNAL_LINK"
            size="1em"
            style="vertical-align: baseline"
          />
        </a>
        {{ $t("i18n.components.page_community_footer.invite_text_2_3") }}
      </li>
      <li>
        {{ $t("i18n.components.page_community_footer.invite_text_3_1") }}
        <a
          class="link-text items-center focus-brand"
          href="https://matrix.to/#/#scribe_community:matrix.org"
          target="_blank"
        >
          {{
            $t("i18n.components.page_community_footer.public_matrix_chat_rooms")
          }}
          <Icon
            :name="IconMap.EXTERNAL_LINK"
            size="1em"
            style="vertical-align: baseline"
          />
        </a>
        {{ $t("i18n.components.page_community_footer.invite_text_3_3") }}
      </li>
      <li>
        {{ $t("i18n.components.page_community_footer.visit_our") }}
        <a
          class="link-text items-center focus-brand"
          href="https://hosted.weblate.org/projects/scribe/scribe-i18n/"
          target="_blank"
        >
          {{
            $t(
              "i18n.components.page_community_footer.weblate_internationalization_project"
            )
          }}
          <Icon
            :name="IconMap.EXTERNAL_LINK"
            size="1em"
            style="vertical-align: baseline"
          />
        </a>
        {{ $t("i18n.components.page_community_footer.invite_text_4_3") }}
      </li>
    </ul>
  </div>
  <div class="style-btns-next-to-one-another">
    <!-- Slot is formatted to accept buttons for the bottom of the page. -->
    <slot />
  </div>
</template>
