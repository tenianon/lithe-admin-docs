import { ref, watch } from 'vue'

export function useMobileLayoutToggle() {
  const showMenu = ref(false)
  const showNav = ref(false)
  const showOutline = ref(false)

  watch(
    [showMenu, showNav, showOutline],
    ([newShowMenu, newShowNav, newShowOutline]) => {
      if (newShowMenu || newShowNav || newShowOutline) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
    { immediate: true },
  )

  return {
    showMenu,
    showNav,
    showOutline,
  }
}
