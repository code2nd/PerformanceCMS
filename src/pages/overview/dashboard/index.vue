<template>
  <div class="dashboard">
    <flow-data />
    <visit-statistics />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useStore } from '@/store'

import FlowData from './components/flow-data.vue'
import VisitStatistics from './components/visit-statistics.vue'

export default defineComponent({
  components: {
    FlowData,
    VisitStatistics
  },
  setup() {
    const store = useStore()

    const activeProject = computed(() => store.state.common.activeProject)

    watch(activeProject, () => getPageData())

    // 获取数据
    const getPageData = () => {
      // 获取流量数据
      store.dispatch('dashboard/getFlowData', activeProject.value)
      // 获取网站访问量统计数据
      store.dispatch('dashboard/getVisitCount', activeProject.value)
      // 获取网站加载耗时统计数据
      store.dispatch('dashboard/getVisitCost', activeProject.value)
    }

    getPageData()

    return {}
  }
})
</script>

<style scoped lang="less">
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  /* .el-card__header {
    padding: 10px 20px;
  } */
}
</style>
