<script setup lang="ts">
import Header from './header/index.vue'
import Aside from './Aside.vue'
import Main from './Main.vue'
import { useData } from 'vitepress'
import Provide from '../components/Provide.vue'
import { registerWatchers, useSidebarControl } from '../composables/vitepress'

import topographySvg from '../assets/topography.svg'
import MobileLayout from './mobile/index.vue'
const { frontmatter } = useData()
const { close } = useSidebarControl()
registerWatchers({ closeSidebar: close })
</script>
<template>
  <Provide>
    <div
      class="bg-neutral-50 [--header-height:calc(var(--spacing)*20)] max-lg:[--header-height:calc(var(--spacing)*22)] dark:bg-neutral-925"
    >
      <div
        class="pointer-events-none fixed inset-0 size-full bg-neutral-100/90 mask-repeat dark:bg-neutral-900/50"
        :style="{
          'mask-image': `url(${topographySvg})`,
        }"
      />
      <Header />
      <div
        class="relative grid min-h-dvh grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_4rem] grid-rows-[1fr_1.25rem_auto] pt-(--header-height) max-xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_4rem] max-lg:grid-cols-1"
      >
        <Aside v-if="frontmatter.outline === 'deep'" />
        <div
          v-if="frontmatter.outline === 'deep'"
          class="pattern pattern-x pattern-fixed sticky top-(--header-height) col-start-2 row-start-1 h-[calc(100dvh-var(--header-height))] max-lg:hidden"
        ></div>
        <Main />
        <div
          class="pattern pattern-x pattern-fixed sticky top-(--header-height) col-start-4 row-start-1 h-[calc(100dvh-var(--header-height))] max-lg:hidden"
        ></div>
        <div
          class="pattern pattern-y pattern-fixed col-span-full row-start-2 h-full lg:col-start-1"
        ></div>
        <div class="py-2.5 lg:col-start-3">
          <p class="text-center text-sm">Copyright © 2026 Lithe Admin</p>
        </div>
      </div>
      <MobileLayout />
    </div>
  </Provide>
</template>
