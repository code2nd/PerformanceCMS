<template>
  <div class="line-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import * as echarts from 'echarts'
import BaseEchart from '@/base-ui/echart'

export default defineComponent({
  props: {
    xLabels: {
      type: Array,
      required: true
    },
    values: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    BaseEchart
  },
  setup(props) {
    const option = computed(() => {
      return {
        title: {
          text: props.title,
          textStyle: {
            color: 'rgba(0, 0, 0, 0.85)',
            fontSize: '16px',
            fontWeight: '500'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: props.xLabels
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            data: props.values,
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#d6def5' },
                { offset: 0.5, color: '#5c7bd9' },
                { offset: 1, color: '#5c7bd9' }
              ])
            }
          }
        ]
      }
    })

    return {
      option
    }
  }
})
</script>

<style scoped lang="less">
.line-echart {
  flex: 1;
}
</style>
