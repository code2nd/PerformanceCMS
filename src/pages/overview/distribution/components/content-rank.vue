<template>
  <div class="content-rank">
    <page-card title="网站访问量城市分布TOP榜">
      <base-table v-bind="rankConfig" :dataSource="rankData" />
    </page-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import PageCard from '@/components/page-card'
import BaseTable from '@/base-ui/table'
import { rankConfig } from '../config/rank.config'

import { IDataType } from '@/components/page-echarts/types'

export default defineComponent({
  props: {
    rankData: {
      type: Array as PropType<IDataType[]>,
      required: true
    }
  },
  components: {
    PageCard,
    BaseTable
  },
  setup() {
    /*     const dataSource = [
      {
        rank: 1,
        count: 20,
        city: '广东'
      },
      {
        rank: 2,
        count: 10,
        city: '广东'
      },
      {
        rank: 3,
        count: 10,
        city: '广东'
      },
      {
        rank: 4,
        count: 10,
        city: '广东'
      },
      {
        rank: 5,
        count: 10,
        city: '广东'
      },
      {
        rank: 6,
        count: 10,
        city: '广东'
      },
      {
        rank: 7,
        count: 10,
        city: '广东'
      },
      {
        rank: 8,
        count: 10,
        city: '广东'
      },
      {
        rank: 9,
        count: 10,
        city: '广东'
      },
      {
        rank: 10,
        count: 10,
        city: '广东'
      }
    ] */

    return { rankConfig }
  }
})
</script>

<style scoped lang="less">
.content-rank {
  height: 100%;
  .box-card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
