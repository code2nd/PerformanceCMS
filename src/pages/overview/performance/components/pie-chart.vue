<template>
  <div class="pie-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '@/components/page-echarts/types'

export default defineComponent({
  props: {
    pieData: {
      type: Array as PropType<IDataType[]>,
      required: true
    }
  },
  components: {
    BaseEchart
  },
  setup(props) {
    const option = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })

    return { option }
  }
})
</script>

<style scoped lang="less">
.pie-echart {
  height: 100%;
}
</style>
