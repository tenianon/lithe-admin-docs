<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useLangs } from '../../composables/vitepress'
import { ref, useTemplateRef } from 'vue'
import { mediaQueryInjectionKey } from '../../components/Provide.vue'
import { useInjectionToRefs } from '../../composables/useInjection'

const { isMaxSm } = useInjectionToRefs(mediaQueryInjectionKey)

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

const handleClick = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <div class="relative">
    <div
      ref="translationsRef"
      @click="handleClick"
      class="flex cursor-pointer items-center justify-between gap-x-1 p-1 transition-colors duration-300 hover:text-primary-500 active:bg-neutral-200 max-lg:rounded max-lg:px-2 max-lg:py-1 dark:hover:text-primary-450 dark:active:bg-neutral-800"
    >
      <span class="iconify shrink-0 ph--translate"></span>
      <span class="flex-1">{{ currentLang.label }}</span>
      <span
        v-if="!isMaxSm"
        class="iconify shrink-0 ph--caret-down"
      ></span>
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
        class="absolute z-10000 w-32 rounded-lg border border-neutral-200 bg-white py-1 shadow-xs transition-[scale,opacity] duration-200 radius-squircle dark:border-neutral-750 dark:bg-neutral-800"
        :class="{
          'left-1/2 mt-2 origin-top -translate-x-1/2': !isMaxSm,
          'bottom-full -left-4 mb-2 ml-2 origin-bottom': isMaxSm,
        }"
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
            class="mx-1 block rounded-lg px-2 py-1.5 transition-colors radius-squircle hover:bg-neutral-150/90 active:bg-neutral-150/90 dark:hover:bg-neutral-700/90 dark:active:bg-neutral-700/90"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped></style>
