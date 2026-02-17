<script setup lang="ts">
import { onMounted, useTemplateRef, shallowRef, ref, CSSProperties } from 'vue'
import { useData, onContentUpdated } from 'vitepress'
import OutlineItem, { type OutlineItemProps } from './OutlineItem.vue'
import { debounce } from '../utils'
import { getHeaders } from '../composables/vitepress'

const { frontmatter, theme } = useData()

const outlinePatternAnimatable = ref(false)

const headers = shallowRef<OutlineItemProps[]>([])
const outlineRef = useTemplateRef<HTMLElement>('outlineRef')
const outlineScrollContainerRef = useTemplateRef<HTMLElement>('outlineScrollContainerRef')

const lineStyle = ref<CSSProperties | null>(null)

const updateHeaders = () => {
  headers.value = getHeaders(frontmatter.value.outline)

  outlinePatternAnimatable.value = !!headers.value.length
}

const isElementInViewport = (el: HTMLElement, container: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  return rect.top >= containerRect.top && rect.bottom <= containerRect.bottom
}

const debouncedScrollIntoView = debounce((el: HTMLElement) => {
  if (!isElementInViewport(el, outlineScrollContainerRef.value!)) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      container: 'nearest',
    } as ScrollIntoViewOptions)
  }
}, 300)

function outlineAnimation() {
  if (outlineRef.value) {
    outlineRef.value.addEventListener('animationstart', (e: AnimationEvent) => {
      if (e.animationName === 'target-current-active') {
        const el = e.target as HTMLElement
        lineStyle.value = {
          '--line-top': `${el.offsetTop}px`,
          '--line-height': `${el.offsetHeight}px`,
        }
        debouncedScrollIntoView(el)
      }
    })
  }
}

onContentUpdated(() => {
  updateHeaders()
})

onMounted(() => {
  outlineAnimation()
})
</script>
<template>
  <div class="flex items-center gap-x-1 pl-3 text-sm">
    <span class="iconify size-5 ph--text-align-right"></span>
    <span>{{ theme.outline?.label || 'On this page' }}</span>
  </div>
  <div
    v-show="headers.length > 0"
    ref="outlineScrollContainerRef"
    class="mt-2 mb-10 flex-1 overflow-x-hidden pl-4"
    style="scroll-target-group: auto; scrollbar-width: none"
  >
    <div class="relative border-l border-neutral-150 dark:border-neutral-825">
      <div
        class="absolute top-(--line-top) -left-px flex h-(--line-height) items-center justify-center"
        :style="lineStyle"
        :class="{
          'transition-[height,top]': outlinePatternAnimatable,
        }"
      >
        <div class="pattern outline-active absolute h-full w-3.5 bg-size-[4px_4px]"></div>
      </div>

      <div ref="outlineRef">
        <OutlineItem
          v-for="header in headers"
          :key="header.link"
          :header
        />
      </div>
    </div>
  </div>
</template>
<style></style>
