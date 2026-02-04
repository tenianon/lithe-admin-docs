---
layout: page
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.location.href = 'zh/guide/getting-started'
  }
})
</script>
