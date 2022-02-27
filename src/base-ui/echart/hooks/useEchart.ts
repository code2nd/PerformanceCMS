import * as echarts from 'echarts'
import chinaMapData from '../data/china.geo.json'

echarts.registerMap('china', chinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOption = (option: echarts.EChartsOption) => {
    echartInstance.setOption(option)
  }

  // 针对非window.resize事件，需要手动resize的时候调用
  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOption,
    updateSize
  }
}
