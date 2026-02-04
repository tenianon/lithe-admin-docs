<script setup lang="ts">
import Search from './Search.vue'
import ThemePicker from '../../components/ThemePicker.vue'
import IconGithub from '../../components/icons/IconGithub.vue'
import Translations from './Translations.vue'
import Nav from './Nav.vue'
</script>
<template>
  <div
    class="fixed inset-x-0 z-9998 h-(--header-height) w-full bg-neutral-50/60 backdrop-blur-lg dark:bg-neutral-925/60"
  >
    <div
      :class="[
        'grid h-full text-sm',
        'grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_4rem]',
        'grid-rows-[1fr_1.5rem]',
      ]"
    >
      <div :class="['px-8 py-4', 'col-start-1', 'row-start-1']">Lithe Admin Docs</div>
      <div
        :class="[
          'pattern pattern-x',
          'col-start-2',
          'row-span-full',
          'row-start-1',
          'max-lg:hidden',
        ]"
      ></div>
      <div :class="['flex justify-between px-6', 'col-start-3 row-start-1', 'max-lg:hidden']">
        <div></div>
        <div class="flex items-center">
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
      <div :class="['pattern pattern-y', 'col-span-full', 'row-start-2']"></div>
    </div>
  </div>
</template>
