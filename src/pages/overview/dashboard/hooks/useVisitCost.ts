import { computed } from 'vue'
import { useStore } from '@/store'

export function useVisitCost() {
  const store = useStore()

  const visitCost = computed(() => {
    const xLabels: string[] = []
    const values: any[] = []

    const visitCount = store.state.dashboard.visitCost
    for (const item of visitCount) {
      xLabels.push(item.dateTime)
      values.push(item.cost)
    }

    return { xLabels, values }
  })

  return visitCost
}
