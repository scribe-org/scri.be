/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Red Hat Display', 'sans-serif'],
        'body': ['Red Hat Text', 'sans-serif'],
      },
      colors: {
        'layer-0': 'rgb(var(--layer-0))',
        'layer-1': 'rgb(var(--layer-1))',
        'layer-2': 'rgb(var(--layer-2))',
        'primary-text': 'rgb(var(--primary-text))',
        'distinct-text': 'rgb(var(--distinct-text))',
        'link-text': 'rgb(var(--link-text))',
        'link-text-hover': 'rgb(var(--link-text-hover))',
        'interactive': 'rgb(var(--interactive))',
        'highlight': 'rgb(var(--highlight))',
        'cta-orange': 'rgb(var(--cta-orange))',
        'banner': {
          DEFAULT: 'rgb(var(--banner-bg))',
          text: 'rgb(var(--banner-text))'
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
} 