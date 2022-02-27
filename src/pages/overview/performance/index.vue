<template>
  <div class="performance">
    <page-performance :pagePerformanceData="performancePage" />
    <chart-list
      chartTitle="页面加载耗时分段次数占比"
      rankTitle="页面加载路由耗时top10"
    >
      <template #chart>
        <rose-chart :data="performanceCost"></rose-chart>
      </template>
      <template #list>
        <el-empty :image-size="200" description="暂未统计"></el-empty>
      </template>
    </chart-list>
    <interface-performance :interfaceCount="interfaceCount" />
    <chart-list
      chartTitle="接口请求耗时分段数量占比"
      rankTitle="接口请求耗时Top10"
    >
      <template #chart>
        <rose-chart :data="interfaceCost"></rose-chart>
      </template>
      <template #list>
        <interface-table :dataSource="interfaceTop" />
      </template>
    </chart-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useStore } from '@/store'

import PagePerformance from './components/page-performance.vue'
import InterfacePerformance from './components/interface-performance.vue'
import ChartList from './components/chart-list.vue'
import RoseChart from './components/rose-chart.vue'
import InterfaceTable from './components/interface-table.vue'

export default defineComponent({
  components: {
    PagePerformance,
    InterfacePerformance,
    ChartList,
    RoseChart,
    InterfaceTable
  },
  setup() {
    const store = useStore()

    const project = computed(() => store.state.common.activeProject)

    // 获取数据
    const performancePage = computed(
      () => store.state.performance.performancePage
    )
    const performanceCost = computed(
      () => store.state.performance.performanceCost
    )
    const interfaceCount = computed(
      () => store.state.performance.interfaceCount
    )
    const interfaceCost = computed(() => store.state.performance.interfaceCost)
    const interfaceTop = computed(() => store.state.performance.interfaceTop)

    // 请求数据
    watch(project, () => getData())
    getData()
    function getData() {
      store.dispatch('performance/getPerformancePageData', project.value)
      store.dispatch('performance/getPerformanceCostData', project.value)
      store.dispatch('performance/getInterfaceCostData', project.value)
      store.dispatch('performance/getInterfaceCountData', project.value)
      store.dispatch('performance/getInterfaceTopData', project.value)
    }

    return {
      performancePage,
      performanceCost,
      interfaceCount,
      interfaceCost,
      interfaceTop
    }
  }
})
</script>

<style scoped lang="less">
.performance {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  .el-card__header {
    padding: 10px 20px;
  }
}
</style>
