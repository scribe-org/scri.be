<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <div
    class="grid grid-cols-1 grid-rows-2 gap-6 sm:grid-cols-2 sm:grid-rows-1 lg:gap-12"
  >
    <ImageLogo
      :aria-label="
        $t(
          'i18n.components.grid_supporters.wikimedia_foundation_logo_aria_label'
        )
      "
      imageLink="https://wikimediafoundation.org"
      imageName="WikimediaFoundation"
    />
    <ImageLogo
      :aria-label="
        $t(
          'i18n.components.grid_supporters.wikimedia_deutschland_logo_aria_label'
        )
      "
      imageLink="https://www.wikimedia.de"
      imageName="WikimediaDeutschland"
    />
  </div>
</template>
