<script setup lang="ts">
import { ref } from 'vue'

const showSearch = ref(false)
</script>
<template>
  <div class="h-full overflow-hidden py-3">
    <button
      class="flex cursor-pointer items-center gap-x-1 rounded-lg border border-neutral-300 bg-neutral-75 px-2 py-1 radius-squircle hover:bg-neutral-150 hover:transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-800 dark:hover:bg-neutral-850"
      @click="showSearch = true"
    >
      <span class="iconify size-5 shrink-0 text-neutral-600 ph--magnifying-glass"></span>
      <span class="mr-1 text-sm dark:text-neutral-600">搜索文档</span>
      <kbd
        class="d rounded-full border border-neutral-300 bg-neutral-50 px-1 radius-squircle dark:border-neutral-750 dark:bg-neutral-800 dark:text-neutral-500"
        >⌘</kbd
      >
      <kbd
        class="rounded-full border border-neutral-300 bg-neutral-50 px-1 radius-squircle dark:border-neutral-750 dark:bg-neutral-800 dark:text-neutral-500"
        >k</kbd
      >
    </button>
  </div>
</template>
