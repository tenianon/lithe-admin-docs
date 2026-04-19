<script lang="ts" setup>
import { Content, useData } from 'vitepress'

import { useLayout } from '../composables/vitepress'
import ContentFooter from './ContentFooter.vue'
import ContentOutline from './ContentOutline.vue'

const { frontmatter } = useData()

const { hasAside } = useLayout()
</script>

<template>
  <div class="row-start-1 grid grid-cols-subgrid lg:col-start-3">
    <div
      class="mx-auto grid w-full max-w-2xl grid-cols-1 gap-x-14 xl:max-w-6xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]"
    >
      <div class="VPDoc px-4 py-10 sm:px-6">
        <div class="doc-wrapper">
          <Content />
        </div>
        <ContentFooter v-if="hasAside && frontmatter.outline !== 'page'" />
      </div>
      <ContentOutline v-if="hasAside && frontmatter.outline !== 'page'" />
    </div>
  </div>
</template>
