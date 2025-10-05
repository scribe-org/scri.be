<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:gap-12"
  >
    <ImageLogo
      imageName="WikimediaFoundation"
      imageLink="https://wikimediafoundation.org"
      :aria-label="
        $t(
          'i18n.components.grid_supporters.wikimedia_foundation_logo_aria_label'
        )
      "
    />
    <ImageLogo
      imageName="WikimediaDeutschland"
      imageLink="https://www.wikimedia.de"
      :aria-label="
        $t(
          'i18n.components.grid_supporters.wikimedia_deutschland_logo_aria_label'
        )
      "
    />
  </div>
</template>
