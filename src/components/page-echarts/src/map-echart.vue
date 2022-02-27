<template>
  <div class="bar-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { convertData, convertCeil } from '../utils/convert-data'
import { IDataType } from '../types'

const props = withDefaults(
  defineProps<{
    title?: string
    mapData: IDataType[]
  }>(),
  {
    title: ''
  }
)

const option = computed(() => {
  const { res: data, max } = convertData(props.mapData)

  return {
    backgroundColor: '#030303',
    /* title: {
      text: '全国主要城市空气质量',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    }, */
    tooltip: {
      trigger: 'item',
      formatter: function (params: { name: string; value: string[] }) {
        return params.name + ' : ' + params.value[2]
      }
    },
    /* legend: {
      orient: 'vertical',
      right: 20,
      top: 10,
      data: ['pm2.5'],
      textStyle: {
        color: '#fff'
      }
    }, */
    visualMap: {
      min: 0,
      max: convertCeil(max),
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: 'rgb(19, 91, 153)',
          borderColor: 'rgb(9, 54, 95)'
        },
        emphasis: {
          areaColor: 'rgb(10, 105, 187)'
        }
      }
    },
    series: [
      {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data,
        symbolSize: 12,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
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
</script>

<style scoped></style>
