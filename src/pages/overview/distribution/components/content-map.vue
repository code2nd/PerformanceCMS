<template>
  <div class="content-map">
    <page-card title="网站访问量地域分布图">
      <map-chart :mapData="mapData" />
    </page-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import PageCard from '@/components/page-card'
import MapChart from './map-chart.vue'

import { IDataType } from '@/components/page-echarts/types'

export default defineComponent({
  props: {
    mapData: {
      type: Array as PropType<IDataType[]>,
      required: true
    }
  },
  components: {
    PageCard,
    MapChart
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.content-map {
  height: 100%;
  .box-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    &:deep(.item) {
      margin: 0;
    }
  }
}
</style>
