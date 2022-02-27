<template>
  <div class="rose-chart">
    <base-echart :option="option" height="368px"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseEchart
  },
  setup(props) {
    const option = computed(() => {
      return {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '类别数据',
            type: 'pie',
            radius: [50, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.data
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
.rose-chart {
  flex: 1;
}
</style>
