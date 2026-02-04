---
layout: page
---

<script setup lang="ts">
import { inBrowser } from 'vitepress'
import { onMounted } from 'vue'

onMounted(() => {
  if (inBrowser) {
    window.location.replace('/zh/guide/getting-started')
  }
})
</script>
