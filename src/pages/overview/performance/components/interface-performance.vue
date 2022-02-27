<template>
  <div class="interface-performance">
    <page-card title="接口性能">
      <page-data-module
        title="接口请求总量"
        :data="interfaceCount?.countTotal || 0"
      >
        <template #tip>
          <question-tooltip content="发起请求的总数量" />
        </template>
      </page-data-module>
      <page-data-module
        title="接口请求平均耗时(ms)"
        :data="interfaceCount?.costTotal || 0"
      >
        <template #tip>
          <question-tooltip content="所有接口请求耗时平均值" />
        </template>
      </page-data-module>
      <page-data-module
        title="今日接口请求数量"
        :data="interfaceCount?.countToday || 0"
      >
      </page-data-module>
      <page-data-module
        title="今日接口请求平均耗时(ms)"
        :data="interfaceCount?.costToday || 0"
      >
      </page-data-module>
    </page-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import PageCard from '@/components/page-card'
import PageDataModule from '@/components/page-data-module'
import QuestionTooltip from './question-tooltip.vue'

import { IInterfaceCount } from '@/service/performance/type'

export default defineComponent({
  props: {
    interfaceCount: {
      type: Object as PropType<IInterfaceCount>,
      required: true
    }
  },
  components: {
    PageCard,
    QuestionTooltip,
    PageDataModule
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.interface-performance {
  margin-bottom: 20px;
}
</style>
