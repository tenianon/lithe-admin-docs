<script setup lang="ts">
import { isActive } from '../../composables/vitepress'
import { useData } from 'vitepress'
import { mobileLayoutInjectionKey } from '../../components/Provide.vue'
import Translations from '../header/Translations.vue'
import { useInjectionToRefs } from '../../composables/useInjection'
import { computed, h } from 'vue'
import ThemePicker from '../header/ThemePicker.vue'

const { showNav, enableTransition } = useInjectionToRefs(mobileLayoutInjectionKey)

const { theme, page } = useData()

const extraComponents = [
  {
    component: () =>
      h(
        'div',
        {
          class: 'mt-auto px-5 flex justify-between items-center w-full pb-6',
        },
        [h(Translations), h(ThemePicker, { size: 'large' })],
      ),
    key: 'footer',
  },
]

const navItems = computed(() =>
  showNav.value ? [...(theme.value.nav || []), ...extraComponents] : [],
)

const onEnter = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  const index = Array.from(el.parentElement?.children || []).indexOf(el)

  element.style.opacity = '0'

  setTimeout(() => {
    element.style.transition = 'opacity 0.3s ease-out'
    element.style.opacity = '1'

    setTimeout(done, 300)
  }, index * 100)
}

const onLeave = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  element.style.transition = 'none'
  element.style.opacity = '0'
  done()
}
</script>
<template>
  <Transition
    v-if="enableTransition"
    enter-to-class="h-full"
    leave-to-class="h-0"
    leave-from-class="h-full"
    enter-from-class="h-0"
  >
    <div
      v-show="showNav"
      class="fixed inset-0 top-[calc(var(--header-height)-2.2rem)] z-10000 w-full bg-neutral-50 transition-[height] duration-300 lg:hidden dark:bg-neutral-925"
    >
      <div class="flex size-full flex-col items-center">
        <TransitionGroup
          @enter="onEnter"
          @leave="onLeave"
          :css="false"
        >
          <template
            v-for="item in navItems"
            :key="item.link || item.key"
          >
            <div
              v-if="item.link"
              class="relative w-full"
            >
              <a
                :href="item.link"
                :target="item.target"
                class="pattern-y flex h-full items-center bg-local px-8 py-3 transition-[color] hover:text-primary-500 dark:hover:text-primary-450"
                :class="
                  isActive(page.relativePath, item.activeMatch || item.link, !!item.activeMatch)
                    ? 'pattern nav-active text-primary-500 dark:text-primary-450'
                    : 'border-transparent'
                "
              >
                {{ item.text }}
              </a>
            </div>

            <component
              v-else-if="item.component"
              :is="item.component"
              :key="item.key"
            />
          </template>
        </TransitionGroup>
      </div>
    </div>
  </Transition>
</template>
<style scoped></style>
