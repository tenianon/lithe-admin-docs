<script setup lang="ts">
import { useData } from 'vitepress'
import { isActive, useLayout } from '../composables/vitepress'

const { page } = useData()
const { sidebarGroups } = useLayout()
</script>
<template>
  <div
    v-if="sidebarGroups.length > 0"
    class="flex w-full flex-col gap-y-4"
  >
    <div
      v-for="(group, index) in sidebarGroups"
      :key="index"
    >
      <h3 class="pl-5 font-normal lg:pl-7">{{ group.text }}</h3>
      <ul
        v-if="group.items"
        class="mt-1.5 text-neutral-500"
      >
        <li
          v-for="item in group.items"
          :key="item.text"
          class="group relative"
        >
          <a
            :href="item.link"
            class="pattern-y block bg-local px-5 py-2 transition-[color] hover:text-primary-500 lg:px-7 dark:hover:text-primary-450"
            :class="
              isActive(page.relativePath, item.link)
                ? 'pattern bg-fixed text-primary-500 [--pattern-border-color:var(--color-primary-200)] [--pattern-fg:var(--color-primary-200)]/55 dark:text-primary-450 dark:[--pattern-border-color:var(--color-primary-950)] dark:[--pattern-fg:var(--color-primary-950)]/55'
                : 'border-transparent'
            "
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style></style>
