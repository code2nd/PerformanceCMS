<template>
  <div class="bar-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
// import * as echarts from 'echarts'
import BaseEchart from '@/base-ui/echart'

export default defineComponent({
  props: {
    title: {
      type: String
    },
    xLabels: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    values: {
      type: Array,
      default: () => []
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
        legend: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          data: props.xLabels,
          axisLabel: {
            // inside: true,
            color: '#999'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            name: 'JS异常',
            type: 'bar',
            /* showBackground: true,
            backgroundStyle: {
              color: '#ffddc7'
            }, */
            itemStyle: {
              color: '#ff8639'
              /* color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#fff4ee' },
                { offset: 0.5, color: '#ff7626' },
                { offset: 1, color: '#ff7626' }
              ]) */
            },
            data: props.values[0]
          },
          {
            name: '接口异常',
            type: 'bar',
            /* showBackground: true,
            backgroundStyle: {
              color: '#adbdec'
            }, */
            itemStyle: {
              color: '#5c7bd9'
              /* color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#fff4ee' },
                { offset: 0.5, color: '#ff7626' },
                { offset: 1, color: '#ff7626' }
              ]) */
            },
            data: props.values[1]
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
.bar-echart {
  height: 100%;
}
</style>
