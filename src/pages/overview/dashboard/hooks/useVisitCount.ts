import { computed } from 'vue'
import { useStore } from '@/store'

export function useVisitCount() {
  const store = useStore()

  const visitCount = computed(() => {
    const xLabels: string[] = []
    const values: any[] = []

    const visitCount = store.state.dashboard.visitCount
    for (const item of visitCount) {
      xLabels.push(item.dateTime)
      values.push(item.value)
    }

    return { xLabels, values }
  })

  return visitCount
}
