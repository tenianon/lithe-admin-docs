import { ref, onMounted, onUnmounted } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'auto'

const STORAGE_KEY = 'theme-mode'

const themeMode = ref<ThemeMode>('auto')

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function apply(mode: ThemeMode) {
  const isDark = mode === 'dark' || (mode === 'auto' && getSystemDark())
  document.documentElement.classList.toggle('dark', isDark)
}

function setThemeMode(mode: ThemeMode) {
  themeMode.value = mode
  localStorage.setItem(STORAGE_KEY, mode)
  apply(mode)
}

export function useThemeMode() {
  let media: MediaQueryList | null = null

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    themeMode.value = saved || 'auto'

    apply(themeMode.value)

    media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', () => {
      if (themeMode.value === 'auto') {
        apply('auto')
      }
    })
  })

  onUnmounted(() => {
    media?.removeEventListener('change', apply as any)
  })

  return {
    themeMode,
    setThemeMode,
  }
}
