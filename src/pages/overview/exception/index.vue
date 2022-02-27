<template>
  <div class="exception">
    <exception-monitor :exceptions="exceptionMonitor" />
    <content-charts pieTitle="总异常数分类对比" barTitle="近一个月异常趋势">
      <template #pie>
        <pie-chart :pieData="exceptionProportion"></pie-chart>
      </template>
      <template #bar>
        <bar-chart v-bind="exceptionTendency"></bar-chart>
      </template>
    </content-charts>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useStore } from '@/store'

import ExceptionMonitor from './components/exception-monitor.vue'
import ContentCharts from './components/content-charts.vue'
import PieChart from './components/pie-chart.vue'
import BarChart from './components/bar-chart.vue'

export default defineComponent({
  components: {
    ExceptionMonitor,
    ContentCharts,
    PieChart,
    BarChart
  },
  setup() {
    const store = useStore()
    const websiteId = computed(() => store.state.common.activeProject)

    // 获取数据
    const exceptionMonitor = computed(
      () => store.state.exception.exceptionMonitor
    )
    const exceptionProportion = computed(
      () => store.state.exception.exceptionProportion
    )
    const exceptionTendency = computed(
      () => store.state.exception.exceptionTendency
    )

    // 请求数据
    watch(websiteId, () => getData())
    getData()
    function getData() {
      store.dispatch('exception/getExceptionMonitorData', websiteId.value)
      store.dispatch('exception/getExceptionProportionData', websiteId.value)
      store.dispatch('exception/getExceptionTendencyData', websiteId.value)
    }

    return { exceptionMonitor, exceptionProportion, exceptionTendency }
  }
})
</script>

<style scoped lang="less">
.exception {
  padding-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
