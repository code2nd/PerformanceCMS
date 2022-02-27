<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

// 定义props
const props = withDefaults(
  defineProps<{
    option: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '100%'
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOption } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOption(props.option)
  })
})
</script>

<style scoped lang="less">
.base-echart {
  height: 100%;
}
</style>
