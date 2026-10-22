// stores/theme.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  const applyTheme = (isDark: boolean) => {
    const html = document.documentElement

    html.classList.toggle('theme-dark', isDark)
    html.classList.toggle('theme-light', !isDark)
  }

  const setTheme = (value: boolean) => {
    isDark.value = value
    applyTheme(value)
  }

  const toggleTheme = () => {
    setTheme(!isDark.value)
  }

  return {
    isDark,
    setTheme,
    toggleTheme,
  }
})
