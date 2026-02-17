<script setup lang="ts">
import Menu from '../components/Menu.vue'
</script>
<template>
  <div class="col-start-1 row-span-full row-start-1 text-sm max-lg:hidden">
    <div
      class="custom-scrollbar custom-scrollbar-w-base sticky top-(--header-height) max-h-[calc(100dvh-var(--header-height))] overflow-x-hidden py-4"
    >
      <Menu />
    </div>
  </div>
</template>
