import { ref, onMounted, watch } from 'vue'

export const useTheme = () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  onMounted(() => {
    isDark.value = 
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)
    updateTheme()
  })

  return {
    isDark,
    toggleTheme
  }
} 