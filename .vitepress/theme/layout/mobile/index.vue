<script setup lang="ts">
import MobileNavOverlay from './MobileNavOverlay.vue'
import MobileMenuOverlay from './MobileMenuOverlay.vue'
import MobileOutlineOverlay from './MobileOutlineOverlay.vue'
import { mobileLayoutInjectionKey } from '../../components/Provide.vue'
import { useInjectionToRefs } from '../../composables/useInjection'
defineOptions({
  name: 'MobileLayout',
})

const { showMenu, showOutline } = useInjectionToRefs(mobileLayoutInjectionKey)

const handleClick = () => {
  showOutline.value = false
  showMenu.value = false
}
</script>
<template>
  <MobileNavOverlay />
  <Transition
    enter-to-class="opacity-100"
    leave-to-class="opacity-0"
    leave-from-class="opacity-100"
    enter-from-class="opacity-0"
  >
    <div
      v-show="showMenu || showOutline"
      class="fixed inset-0 top-[calc(var(--header-height))] z-9990 bg-black/5 transition-opacity duration-300 dark:bg-black/10"
      @click="handleClick"
    />
  </Transition>

  <MobileMenuOverlay />
  <MobileOutlineOverlay />
</template>
