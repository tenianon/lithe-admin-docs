<script setup lang="ts">
import Outline from '../../components/Outline.vue'
import { useInjectionToRefs } from '../../composables/useInjection'
import { mobileLayoutInjectionKey } from '../../components/Provide.vue'

const { showOutline } = useInjectionToRefs(mobileLayoutInjectionKey)
</script>
<template>
  <Transition
    enter-to-class="translate-x-0"
    leave-to-class="translate-x-full"
    leave-from-class="translate-x-0"
    enter-from-class="translate-x-full"
  >
    <div
      v-show="showOutline"
      class="fixed top-[calc(var(--header-height))] right-0 z-9999 flex h-[calc(100%-var(--header-height)+2rem)] w-[72%] flex-col overflow-hidden border-l border-l-neutral-225 bg-neutral-50 pt-4 pb-2 pl-2 transition-[translate] duration-300 lg:hidden dark:border-l-neutral-800 dark:bg-neutral-925"
    >
      <Outline />
    </div>
  </Transition>
</template>
<style></style>
