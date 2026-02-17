<script lang="ts">
import type { ComputedRef, InjectionKey, Reactive } from 'vue'

export interface MobileLayout {
  showNav: boolean
  showMenu: boolean
  showOutline: boolean
  enableTransition: boolean
}

export interface MediaQuery {
  isMaxSm: ComputedRef<boolean>
  isMaxMd: ComputedRef<boolean>
  isMaxLg: ComputedRef<boolean>
  isMaxXl: ComputedRef<boolean>
  isMax2Xl: ComputedRef<boolean>
}

export const mobileLayoutInjectionKey: InjectionKey<MobileLayout> = Symbol('mobileLayout')
export const mediaQueryInjectionKey: InjectionKey<Reactive<MediaQuery>> =
  Symbol('mediaQueryInjectionKey')
</script>

<script setup lang="ts">
import { nextTick, provide, reactive, ref, watch } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useRoute } from 'vitepress'

const router = useRoute()

const breakpoints = useBreakpoints(breakpointsTailwind)

const mobileLayout = reactive<MobileLayout>({
  showNav: false,
  showMenu: false,
  showOutline: false,
  enableTransition: true,
})

const mediaQuery = reactive<MediaQuery>({
  isMaxSm: breakpoints.smaller('sm'),
  isMaxMd: breakpoints.smaller('md'),
  isMaxLg: breakpoints.smaller('lg'),
  isMaxXl: breakpoints.smaller('xl'),
  isMax2Xl: breakpoints.smaller('2xl'),
})

watch(
  mobileLayout,
  (newVal) => {
    if (newVal.showNav || newVal.showMenu || newVal.showOutline) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  },
  { immediate: true },
)

watch(
  () => mediaQuery.isMaxSm,
  (newVal) => {
    if (!newVal) {
      mobileLayout.showNav = false
      mobileLayout.showMenu = false
      mobileLayout.showOutline = false
    }
  },
)

watch(
  () => router.path,
  (newPath, oldPath) => {
    if (newPath !== oldPath && (mobileLayout.showMenu || mobileLayout.showNav)) {
      mobileLayout.showMenu = false
      mobileLayout.showNav = false
      mobileLayout.enableTransition = false
      nextTick(() => {
        mobileLayout.enableTransition = true
      })
    }
  },
)

provide(mobileLayoutInjectionKey, mobileLayout)
provide(mediaQueryInjectionKey, mediaQuery)
</script>
<template>
  <slot />
</template>
