<script setup lang="ts">
import Menu from '../../components/Menu.vue'
import { useInjectionToRefs } from '../../composables/useInjection'
import { mobileLayoutInjectionKey } from '../../components/Provide.vue'

const { showMenu, enableTransition } = useInjectionToRefs(mobileLayoutInjectionKey)
</script>
<template>
  <Transition
    v-if="enableTransition"
    enter-to-class="translate-x-0"
    leave-to-class="-translate-x-full"
    leave-from-class="translate-x-0"
    enter-from-class="-translate-x-full"
  >
    <div
      v-show="showMenu"
      class="custom-scrollbar custom-scrollbar-w-base fixed top-[calc(var(--header-height))] z-9999 h-[calc(100%-var(--header-height)+2rem)] w-[72%] border-r border-r-neutral-225 bg-neutral-50 pt-4 transition-[translate] duration-300 lg:hidden dark:border-r-neutral-800 dark:bg-neutral-925"
    >
      <Menu />
    </div>
  </Transition>
  <div
    v-else
    v-show="showMenu"
    class="custom-scrollbar custom-scrollbar-w-base fixed top-[calc(var(--header-height))] z-9999 h-[calc(100%-var(--header-height)+2rem)] w-[72%] border-r border-r-neutral-225 bg-neutral-50 pt-4 lg:hidden dark:border-r-neutral-800 dark:bg-neutral-925"
  >
    <Menu />
  </div>
</template>
<style></style>
