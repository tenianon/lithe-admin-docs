<script setup lang="ts">
import { useData } from 'vitepress'

import { usePrevNext } from '../composables/vitepress'
import { computed, onMounted, shallowRef, useTemplateRef, watch, watchEffect } from 'vue'
import { useNavigatorLanguage } from '@vueuse/core'

const prevNext = usePrevNext()

const { theme, page, lang: pageLang } = useData()
const { language: browserLang } = useNavigatorLanguage()

const timeRef = useTemplateRef('timeRef')

const date = computed(() => (page.value.lastUpdated ? new Date(page.value.lastUpdated) : null))
const isoDatetime = computed(() => date.value?.toISOString())
const datetime = shallowRef('')

// set time on mounted hook to avoid hydration mismatch due to
// potential differences in timezones of the server and clients
onMounted(() => {
  watchEffect(() => {
    if (!date.value) {
      datetime.value = ''
      return
    }

    const lang = theme.value.lastUpdated?.formatOptions?.forceLocale
      ? pageLang.value
      : browserLang.value

    datetime.value = new Intl.DateTimeFormat(
      lang,
      theme.value.lastUpdated?.formatOptions ?? {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    ).format(date.value)

    if (lang && pageLang.value !== lang) {
      timeRef.value?.setAttribute('lang', lang)
    } else {
      timeRef.value?.removeAttribute('lang')
    }
  })
})
</script>
<template>
  <div class="my-6 border-t border-neutral-150 dark:border-neutral-850"></div>
  <div class="flex justify-between gap-4 max-sm:flex-col sm:items-center">
    <a
      href="javascript:void(0)"
      class="flex items-center gap-x-1 text-sm text-primary-450 hover:text-primary-400 dark:text-primary-500 dark:hover:text-primary-450"
    >
      <span class="iconify size-5 ph--note-pencil"> </span>
      <span>{{ theme.doc?.text || theme.editLinkText || 'Edit on GitHub' }}</span>
    </a>

    <div
      v-if="datetime"
      class="text-sm text-neutral-400 dark:text-neutral-500"
    >
      <span
        >{{ theme.lastUpdated?.text || theme.lastUpdatedText || 'Last updated' }}&nbsp;-&nbsp;</span
      >
      <time
        ref="timeRef"
        :datetime="isoDatetime"
      >
        {{ datetime }}</time
      >
    </div>
  </div>
  <div class="mt-6 flex justify-between gap-x-14 gap-y-4 max-sm:flex-col sm:items-center">
    <div class="flex-1">
      <a
        v-if="prevNext.prev.link"
        :href="prevNext.prev.link"
        class="group pattern pattern-hover block rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm radius-squircle dark:border-neutral-800 dark:bg-neutral-925"
      >
        <div
          class="flex items-center gap-x-1 text-neutral-400 transition-[color,translate] group-hover:-translate-x-2 group-hover:text-primary-500 dark:text-neutral-550"
        >
          <span class="iconify size-4 ph--arrow-left"></span>
          <span>{{ theme.docFooter?.prev || 'Previous page' }}</span>
        </div>
        <p class="mt-1 dark:text-neutral-450">{{ prevNext.prev.text }}</p>
      </a>
    </div>
    <div class="flex-1">
      <a
        v-if="prevNext.next.link"
        :href="prevNext.next.link"
        class="group pattern pattern-hover block rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-right text-sm radius-squircle dark:border-neutral-800 dark:bg-neutral-925"
      >
        <div
          class="flex items-center justify-end gap-x-1 text-neutral-400 transition-[color,translate] group-hover:translate-x-2 group-hover:text-primary-500 dark:text-neutral-550"
        >
          <span>{{ theme.docFooter?.next || 'Next page' }}</span>
          <span class="iconify size-4 ph--arrow-right"></span>
        </div>
        <p class="mt-1 dark:text-neutral-450">{{ prevNext.next.text }}</p>
      </a>
    </div>
  </div>
</template>
<style scoped></style>
