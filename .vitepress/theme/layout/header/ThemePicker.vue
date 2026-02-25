<script setup lang="ts">
import { useThemeMode, type ThemeMode } from '../../composables/useThemeMode'

interface ThemePickerProps {
  size?: 'small' | 'medium' | 'large'
}

const { size = 'medium' } = defineProps<ThemePickerProps>()

const { themeMode, setThemeMode } = useThemeMode()

const themeList: Array<{ value: ThemeMode; icon: string }> = [
  {
    value: 'light',
    icon: 'ph--sun',
  },
  {
    value: 'dark',
    icon: 'ph--moon-stars',
  },
  {
    value: 'auto',
    icon: 'ph--desktop',
  },
]
</script>
<template>
  <div
    class="flex items-center gap-x-0.5 rounded-full border border-neutral-300 p-0.75 radius-squircle dark:border-neutral-750"
  >
    <div
      v-for="item in themeList"
      :key="item.value"
      class="flex cursor-pointer items-center justify-center rounded-full border p-0.75 transition-colors radius-squircle hover:text-primary-500 dark:hover:text-primary-450"
      :class="
        themeMode === item.value
          ? 'pattern pattern-full bg-size-[4px_4px] text-primary-500 [--pattern-border-color:var(--color-primary-300)] [--pattern-fg:var(--color-primary-100)] dark:text-primary-450 dark:[--pattern-border-color:var(--color-primary-700)] dark:[--pattern-fg:var(--color-primary-950)]'
          : 'border-transparent'
      "
      @click="setThemeMode(item.value)"
    >
      <span
        class="iconify p-0.5"
        :class="[
          item.icon,
          {
            'size-3.5': size === 'small',
            'size-4.5': size === 'medium',
            'size-5.5': size === 'large',
          },
        ]"
      ></span>
    </div>
  </div>
</template>
