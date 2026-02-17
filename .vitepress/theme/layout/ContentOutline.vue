<script setup lang="ts">
import Outline from '../components/Outline.vue'
</script>

<template>
  <div class="max-xl:hidden">
    <div
      class="sticky top-(--header-height) flex h-[calc(100dvh-var(--header-height))] flex-col pt-10 pr-4 pb-4"
    >
      <Outline />
    </div>
  </div>
</template>
