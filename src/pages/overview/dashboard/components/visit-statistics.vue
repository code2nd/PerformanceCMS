<template>
  <div class="visit-statistics">
    <el-card
      class="box-card"
      :body-style="{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }"
    >
      <page-bar-chart
        title="网站访问量统计（次）"
        v-bind="visitCount"
      ></page-bar-chart>
      <page-line-chart
        title="网站访问耗时统计（ms）"
        v-bind="visitCost"
      ></page-line-chart>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageBarChart from './page-bar-chart.vue'
import PageLineChart from './page-line-bar.vue'

import { useVisitCount } from '../hooks/useVisitCount'
import { useVisitCost } from '../hooks/useVisitCost'

export default defineComponent({
  components: {
    PageBarChart,
    PageLineChart
  },
  setup() {
    const visitCount = useVisitCount()
    const visitCost = useVisitCost()

    // const

    return {
      visitCount,
      visitCost
    }
  }
})
</script>

<style scoped lang="less">
.visit-statistics {
  flex: 1;
  padding-bottom: 20px;
  margin-top: 20px;
  .box-card {
    display: flex;
    width: 100%;
    height: 100%;
    .el-card__body {
      flex: 1;
      width: 100%;
      height: 100%;
      /* display: flex;
      flex-direction: column; */
    }
  }
}
</style>
