<script setup lang="ts">
import Search from './Search.vue'
import ThemePicker from './ThemePicker.vue'
import IconGithub from '../../components/icons/IconGithub.vue'
import Translations from './Translations.vue'
import Nav from './Nav.vue'
import MobileBreadcrumb from '../mobile/MobileBreadcrumb.vue'
import MobileNav from '../mobile/MobileNav.vue'
</script>
<template>
  <div
    class="fixed inset-x-0 z-9998 h-(--header-height) w-full bg-neutral-50/60 backdrop-blur-lg dark:bg-neutral-925/60"
  >
    <div
      class="grid h-full grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_4rem] grid-rows-[1fr_1.5rem] text-sm max-lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-lg:grid-rows-[1fr_2.2rem]"
    >
      <div class="col-start-1 row-start-1 flex items-center px-8">Lithe Admin Docs</div>
      <div
        class="pattern pattern-x col-start-2 row-span-full row-start-1 bg-fixed max-lg:hidden"
      ></div>
      <div class="col-start-3 row-start-1 flex justify-end px-6 max-lg:col-start-2 max-lg:px-2.5">
        <div class="flex items-center max-lg:hidden">
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
            class="size-5.5 shrink-0 transition-colors hover:text-primary-500 dark:hover:text-primary-400"
          >
            <IconGithub />
          </a>
        </div>
        <MobileNav />
      </div>
      <div
        class="pattern pattern-x col-start-4 row-span-full row-start-1 bg-fixed max-lg:hidden"
      ></div>
      <div class="pattern pattern-y relative col-span-full row-start-2 bg-fixed">
        <MobileBreadcrumb />
      </div>
    </div>
  </div>
</template>
