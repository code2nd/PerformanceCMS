<template>
  <div class="map-chart">
    <base-echart :option="option" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

import BaseEchart from '@/base-ui/echart'

import {
  convertData,
  convertCeil
} from '@/components/page-echarts/utils/convert-data'
import { IDataType } from '@/components/page-echarts/types'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    mapData: {
      type: Array as PropType<IDataType[]>,
      required: true
    }
  },
  components: {
    BaseEchart
  },
  setup(props) {
    const option = computed(() => {
      const { res: data, max } = convertData(props.mapData)

      return {
        // backgroundColor: '#030303',
        tooltip: {
          trigger: 'item',
          formatter: function (params: { name: string; value: string[] }) {
            return params.name + ' : ' + params.value[2]
          }
        },
        visualMap: {
          min: 0,
          max: convertCeil(max),
          left: 20,
          bottom: 20,
          calculable: true,
          text: ['高', '低'],
          inRange: {
            color: [
              'rgb(70, 240, 252)',
              'rgb(250, 220, 46)',
              'rgb(245, 38, 186)'
            ]
          },
          textStyle: {
            color: '#333'
          }
        },
        geo: {
          map: 'china',
          itemStyle: {
            // areaColor: 'rgb(19, 91, 153)',
            borderColor: 'rgb(9, 54, 95)'
          },
          emphasis: {
            itemStyle: {
              areaColor: 'rgb(10, 105, 187)'
            },
            label: {
              show: false
            }
          }
        },
        series: [
          {
            name: '网站访问量量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data,
            symbolSize: 12,
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              }
            }
          },
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            tooltip: {
              show: false
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
.map-chart {
  width: 100%;
}
</style>
