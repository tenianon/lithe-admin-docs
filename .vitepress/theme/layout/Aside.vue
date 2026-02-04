<script setup lang="ts">
import { useData } from 'vitepress'
import { isActive, useLayout } from '../composables/vitepress'

const { page } = useData()
const { sidebarGroups } = useLayout()
</script>
<template>
  <div :class="['col-start-1 row-span-full row-start-1 text-sm', 'max-lg:hidden']">
    <div
      class="custom-scrollbar custom-scrollbar-w-base sticky top-(--header-height) max-h-[calc(100dvh-var(--header-height))] overflow-x-hidden py-4"
    >
      <div
        v-if="sidebarGroups.length > 0"
        class="flex w-full flex-col gap-y-4"
      >
        <div
          v-for="(group, index) in sidebarGroups"
          :key="index"
        >
          <h3 class="pl-7 font-normal">{{ group.text }}</h3>
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
                class="pattern-y block px-7 py-2 transition-[color] hover:text-primary-500 dark:hover:text-primary-450"
                :class="
                  isActive(page.relativePath, item.link)
                    ? 'pattern nav-active text-primary-500 dark:text-primary-450'
                    : 'border-transparent'
                "
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
