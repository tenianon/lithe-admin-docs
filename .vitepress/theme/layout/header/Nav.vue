<script setup lang="ts">
import { useData } from 'vitepress'
import { isActive } from '../../composables/vitepress'

const { theme, page } = useData()
</script>
<template>
  <div class="flex h-full items-center">
    <div
      class="relative h-full"
      v-for="{ link, text, activeMatch, target } in theme.nav"
    >
      <a
        :key="link"
        :href="link"
        :target="target"
        class="pattern-x flex h-full items-center px-4 transition-[color] hover:text-primary-500 dark:hover:text-primary-450"
        :class="
          isActive(page.relativePath, activeMatch || link, !!activeMatch)
            ? 'pattern bg-fixed text-primary-500 [--pattern-border-color:var(--color-primary-200)] [--pattern-fg:var(--color-primary-200)]/55 dark:text-primary-450 dark:[--pattern-border-color:var(--color-primary-950)] dark:[--pattern-fg:var(--color-primary-950)]/55'
            : 'border-transparent'
        "
      >
        {{ text }}
      </a>
    </div>
  </div>
</template>
<style></style>
