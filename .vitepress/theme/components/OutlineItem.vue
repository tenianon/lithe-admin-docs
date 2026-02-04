<script setup lang="ts">
export interface OutlineItemProps {
  element: HTMLHeadingElement
  level: number
  title: string
  link: string
  children: OutlineItemProps[]
}

const props = defineProps<{
  header: OutlineItemProps
}>()
</script>

<template>
  <a
    :href="props.header.link"
    class="target block py-1.5 text-sm transition-colors hover:text-primary-500 dark:hover:text-primary-450"
    :style="`padding-left: ${props.header.level - 1 + 0.25}rem`"
  >
    {{ props.header.title }}
  </a>
  <div v-if="props.header.children && props.header.children.length">
    <OutlineItem
      v-for="child in header.children"
      :key="child.link"
      :header="child"
    />
  </div>
</template>
