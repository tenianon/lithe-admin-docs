import { inject, toRefs } from 'vue'

import type { InjectionKey } from 'vue'

export function useInjection<T>(key: InjectionKey<T> | string) {
  const context = inject(key, null)
  if (!context) {
    throw new Error('useInjection must be used within Injection provider')
  }
  return context
}

export function useInjectionToRefs<T>(key: InjectionKey<T> | string) {
  return toRefs(useInjection(key))
}
