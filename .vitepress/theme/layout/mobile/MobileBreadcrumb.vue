<script setup lang="ts">
import { computed, watch } from 'vue'
import { useData } from 'vitepress'
import { useInjectionToRefs } from '../../composables/useInjection'
import { mobileLayoutInjectionKey } from '../../components/Provide.vue'
import IconSlash from '../../components/icons/IconSlash.vue'
const { showMenu, showOutline } = useInjectionToRefs(mobileLayoutInjectionKey)
const { page, theme } = useData()

const breadcrumbs = computed(() => {
  const sidebar = theme.value.sidebar
  const relativePath = page.value.relativePath

  if (!sidebar) return page.value.title ? [page.value.title] : []

  const findPath = (items: any[], path: string[] = []): string[] | null => {
    for (const item of items) {
      if (item.link && relativePath.includes(item.link.replace(/^\//, ''))) {
        return [...path, item.text].filter(Boolean)
      }
      if (item.items) {
        const result = findPath(item.items, item.text ? [...path, item.text] : path)
        if (result) return result
      }
    }
    return null
  }

  for (const key in sidebar) {
    const items = sidebar[key]
    const sidebarItems = items.items || items
    const path = findPath(Array.isArray(sidebarItems) ? sidebarItems : [sidebarItems])
    if (path) {
      return path
    }
  }

  return page.value.title ? [page.value.title] : []
})

const handleMenuClick = () => {
  showOutline.value = false
  showMenu.value = !showMenu.value
}

const handleOutlineClick = () => {
  showMenu.value = false
  showOutline.value = !showOutline.value
}
</script>
<template>
  <div class="hidden h-full items-center justify-between px-3 py-1 select-none max-lg:flex">
    <div class="flex h-full items-center gap-1 text-neutral-600 dark:text-neutral-400">
      <div
        v-show="breadcrumbs.length > 1"
        @click="handleMenuClick"
        class="flex h-full items-center rounded px-1.5 transition-[background-color] duration-300 hover:bg-neutral-200 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-800"
      >
        <template
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="breadcrumb"
        >
          <span>{{ breadcrumb }}</span>
          <IconSlash
            class="w-4.5"
            v-if="index < breadcrumbs.length - 1"
          />
        </template>
      </div>
    </div>
    <div
      @click="handleOutlineClick"
      class="flex h-full items-center rounded px-1.5 transition-[background-color] duration-300 hover:bg-neutral-200 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-800"
    >
      {{ theme.outline?.label }}
    </div>
  </div>
</template>
<style></style>
