<script setup lang="ts">
import Search from './Search.vue'
import ThemePicker from '../../components/ThemePicker.vue'
import IconGithub from '../../components/icons/IconGithub.vue'
import Translations from './Translations.vue'
import Nav from './Nav.vue'
import { useData } from 'vitepress'
import { useMobileLayoutToggle } from '../../composables/useMobileLayoutToggle'
import { isActive } from '../../composables/vitepress'
const { theme, page } = useData()
const { showNav } = useMobileLayoutToggle()
</script>
<template>
  <div
    class="fixed inset-x-0 z-9998 h-(--header-height) w-full bg-neutral-50/60 backdrop-blur-lg dark:bg-neutral-925/60"
  >
    <div
      :class="[
        'grid h-full text-sm',
        'grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_4rem] max-lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]',
        'grid-rows-[1fr_1.5rem] max-lg:grid-rows-[1fr_2rem]',
      ]"
    >
      <div :class="['flex items-center px-8', 'col-start-1', 'row-start-1']">Lithe Admin Docs</div>
      <div
        :class="[
          'pattern pattern-x',
          'col-start-2',
          'row-span-full',
          'row-start-1',
          'max-lg:hidden',
        ]"
      ></div>
      <div
        :class="[
          'flex justify-end',
          'col-start-3 row-start-1 max-lg:col-start-2',
          'px-6 max-lg:px-2.5',
        ]"
      >
        <div :class="['flex items-center', 'max-lg:hidden']">
          <Search />
          <div class="mx-4 h-5"></div>
          <Nav />
          <div class="mx-4 h-5 border-l border-neutral-200 dark:border-neutral-800"></div>
          <Translations />
          <div class="mx-4 h-5 border-l border-neutral-200 dark:border-neutral-800"></div>
          <ThemePicker />
          <div class="mx-4 h-5 border-l border-neutral-200 dark:border-neutral-800"></div>
          <a
            href="https://github.com/tenianon/lithe-admin-docs"
            target="_blank"
            class="size-5.5 transition-colors hover:text-primary-500 dark:hover:text-primary-400"
          >
            <IconGithub />
          </a>
        </div>
        <div :class="['flex items-center gap-x-1.5', 'hidden max-lg:flex']">
          <button
            :class="[
              'flex cursor-pointer items-center justify-center rounded-full p-1.5 duration-300',
              'hover:text-primary-500 dark:hover:bg-neutral-800 dark:hover:text-primary-400 dark:focus:bg-neutral-800',
            ]"
          >
            <span class="iconify size-6 ph--magnifying-glass"></span>
          </button>
          <button
            :class="[
              'flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-colors',
              'dark:hover:bg-neutral-800 dark:focus:bg-neutral-800',
            ]"
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
            :class="[
              'flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-colors',
              'hover:text-primary-500 dark:hover:bg-neutral-800 dark:hover:text-primary-400 dark:focus:bg-neutral-800',
            ]"
          >
            <span class="iconify size-6 ph--list"></span>
          </button>
        </div>
      </div>
      <div
        :class="[
          'pattern pattern-x',
          'col-start-4',
          'row-span-full',
          'row-start-1',
          'max-lg:hidden',
        ]"
      ></div>
      <div :class="['pattern pattern-y relative', 'col-span-full', 'row-start-2']">
        <div class="hidden h-full items-center justify-between px-4 max-lg:flex">
          <div></div>
          <div>
            <span>{{ theme.outline?.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Transition
    enter-to-class="translate-x-0"
    leave-to-class="translate-x-full"
    leave-from-class="translate-x-0"
    enter-from-class="translate-x-full"
  >
    <div
      v-show="showNav"
      class="fixed inset-0 duration-300 top-[calc(var(--header-height)-2rem)] z-10000 w-full transition-transform lg:hidden dark:bg-neutral-925"
    >
      <div class="flex flex-col items-center">
        <div
          class="relative w-full"
          v-for="{ link, text, activeMatch, target } in theme.nav"
        >
          <a
            :key="link"
            :href="link"
            :target="target"
            class="pattern-y flex h-full items-center px-8 py-4 transition-[color] hover:text-primary-500 dark:hover:text-primary-450"
            :class="
              isActive(page.relativePath, activeMatch || link, !!activeMatch)
                ? 'pattern nav-active text-primary-500 dark:text-primary-450'
                : 'border-transparent'
            "
          >
            {{ text }}
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>
