export const IconMap = {
  GLOBE: 'globe',
  EXTERNAL_LINK: 'external-link',
  GITHUB: 'github',
  MATRIX: 'matrix',
  MASTODON: 'mastodon',
  THEME: 'theme',
  DESKTOP: 'desktop'
} as const;

export type IconMapType = typeof IconMap[keyof typeof IconMap]; 