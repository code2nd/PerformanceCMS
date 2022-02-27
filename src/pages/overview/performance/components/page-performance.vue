<template>
  <div class="page-performance">
    <page-card title="页面性能">
      <page-data-module
        title="TTFB平均时间(ms)"
        :data="pagePerformanceData?.avgTTFBTotal || 0"
      >
        <template #tip>
          <question-tooltip
            content="发起请求到第一个字节到达的时间，涉及DNS，TCP等"
          />
        </template>
      </page-data-module>
      <page-data-module
        title="Dom解析平均时间(ms)"
        :data="pagePerformanceData?.avgDomTotal || 0"
      >
        <template #tip>
          <question-tooltip content="Dom解析完成的时间，反映出DOM的复杂度" />
        </template>
      </page-data-module>
      <page-data-module
        title="页面平均加载时间(ms)"
        :data="pagePerformanceData?.avgLoadTotal || 0"
      >
        <template #tip>
          <question-tooltip content="页面加载完成的总时间" />
        </template>
      </page-data-module>
      <page-data-module
        title="今日TTFB平均时间(ms)"
        :data="pagePerformanceData?.avgTTFBToday || 0"
      >
      </page-data-module>
      <page-data-module
        title="今日Dom解析平均时间(ms)"
        :data="pagePerformanceData?.avgDomToday || 0"
      >
      </page-data-module>
      <page-data-module
        title="今日页面平均加载时间(ms)"
        :data="pagePerformanceData?.avgLoadToday || 0"
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

import { IPerformancePage } from '@/service/performance/type'

export default defineComponent({
  props: {
    pagePerformanceData: {
      type: Object as PropType<IPerformancePage>,
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
.page-performance {
  margin-bottom: 20px;
}
</style>
