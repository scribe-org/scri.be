import { ref } from 'vue'

export function useTheme() {
  const theme = ref(localStorage.getItem('theme') || 'system')

  const setTheme = (newTheme) => {
    // Remove existing theme classes
    document.documentElement.classList.remove('light', 'dark')

    if (newTheme === 'system') {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.add('light')
      }
    } else {
      // Apply specific theme
      document.documentElement.classList.add(newTheme)
    }

    localStorage.setItem('theme', newTheme)
    theme.value = newTheme
  }

  // Watch for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (theme.value === 'system') {
      setTheme('system')
    }
  })

  // Initial theme application
  setTheme(theme.value)

  return {
    theme,
    setTheme
  }
} 