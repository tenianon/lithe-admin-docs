<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useLangs } from '../../composables/vitepress'
import { ref, useTemplateRef } from 'vue'

const { localeLinks, currentLang } = useLangs({ correspondingLink: true })

const isOpen = ref(false)

const translationsRef = useTemplateRef('translationsRef')
const translationsListRef = useTemplateRef('translationsListRef')

onClickOutside(
  translationsListRef,
  () => {
    isOpen.value = false
  },
  {
    ignore: [translationsRef],
  },
)
</script>
<template>
  <div class="relative">
    <div
      ref="translationsRef"
      @click="isOpen = !isOpen"
      class="flex cursor-pointer items-center gap-x-1 p-1 transition-colors hover:text-primary-500 dark:hover:text-primary-450"
    >
      <span class="iconify shrink-0 ph--translate"></span>
      <span>{{ currentLang.label }}</span>
      <span class="iconify shrink-0 ph--caret-down"></span>
    </div>
    <transition
      enter-from-class="scale-x-60 scale-y-0 opacity-0"
      leave-from-class="scale-y-100 opacity-100"
      enter-to-class="scale-y-100 opacity-100"
      leave-to-class="scale-x-60 scale-y-0 opacity-0"
    >
      <div
        v-show="isOpen"
        ref="translationsListRef"
        class="absolute left-1/2 z-10000 mt-2 w-32 origin-top -translate-x-1/2 rounded-lg border border-neutral-200 bg-white py-1 shadow-xs transition-[scale,opacity] duration-200 radius-squircle dark:border-neutral-750 dark:bg-neutral-800"
      >
        <div class="mx-1 block rounded-lg px-2 py-1.5 radius-squircle">
          {{ currentLang.label }}
        </div>
        <div class="my-1 border-t border-neutral-200 dark:border-neutral-750"></div>
        <div
          v-for="link in localeLinks"
          :key="link.lang"
        >
          <a
            :href="link.link"
            class="mx-1 block rounded-lg px-2 py-1.5 transition-colors radius-squircle hover:bg-neutral-150/90 dark:hover:bg-neutral-700/90"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped></style>
