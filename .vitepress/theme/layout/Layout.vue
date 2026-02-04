<script setup lang="ts">
import Header from './header/index.vue'
import Aside from './Aside.vue'
import Main from './Main.vue'
import { registerWatchers, useSidebarControl } from '../composables/vitepress'

// @ts-ignore
import topographySvg from '../assets/topography.svg'

const { close } = useSidebarControl()
registerWatchers({ closeSidebar: close })
</script>

<template>
  <div class="bg-neutral-50 [--header-height:calc(var(--spacing)*20)] dark:bg-neutral-925">
    <div
      class="pointer-events-none fixed inset-0 size-full bg-neutral-100/90 mask-repeat dark:bg-neutral-900/50"
      :style="{
        'mask-image': `url(${topographySvg})`,
      }"
    />
    <Header />
    <div
      :class="[
        'relative grid min-h-dvh pt-(--header-height)',
        'grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_4rem] max-xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_4rem] max-lg:grid-cols-1',
        'grid-rows-[1fr_1.25rem_auto]',
      ]"
    >
      <Aside />
      <div
        :class="[
          'pattern pattern-x sticky top-(--header-height) h-[calc(100dvh-var(--header-height))]',
          'col-start-2',
          'row-start-1',
          'max-lg:hidden',
        ]"
      ></div>
      <Main />
      <div
        :class="[
          'pattern pattern-x sticky top-(--header-height) h-[calc(100dvh-var(--header-height))]',
          'col-start-4',
          'row-start-1',
          'max-lg:hidden',
        ]"
      ></div>
      <div :class="['pattern pattern-y col-span-full row-start-2 h-full', 'lg:col-start-2']"></div>
      <div :class="['p-4', 'lg:col-start-3']"></div>
    </div>
  </div>
</template>
