<script setup lang="ts">
import IconGithub from '../../components/icons/IconGithub.vue'
import { mobileLayoutInjectionKey } from '../../components/Provide.vue'
import { useInjectionToRefs } from '../../composables/useInjection'

const { showNav } = useInjectionToRefs(mobileLayoutInjectionKey)
</script>
<template>
  <div class="flex items-center gap-x-1.5 lg:hidden">
    <button
      class="flex cursor-pointer items-center justify-center rounded-full p-1.5 duration-300 active:bg-neutral-200 active:text-primary-500 dark:active:bg-neutral-800 dark:active:text-primary-400"
    >
      <span class="iconify size-6 ph--magnifying-glass"></span>
    </button>
    <button
      class="flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-colors active:bg-neutral-200 active:text-primary-500 dark:active:bg-neutral-800 dark:active:text-primary-400"
    >
      <a
        href="https://github.com/tenianon/lithe-admin-docs"
        target="_blank"
        class="size-6 transition-colors hover:text-primary-500 dark:hover:text-primary-400"
      >
        <IconGithub />
      </a>
    </button>
    <button
      @click="showNav = !showNav"
      class="flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-colors active:bg-neutral-200 active:text-primary-500 dark:active:bg-neutral-800 dark:active:text-primary-400"
    >
      <span
        v-if="!showNav"
        class="iconify size-6 ph--list"
      ></span>
      <span
        v-else
        class="iconify size-6 ph--x"
        >Menu</span
      >
    </button>
  </div>
</template>
<style></style>
