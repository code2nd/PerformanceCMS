<template>
  <div class="flow-data">
    <page-card title="流量统计">
      <page-data-module
        title="总浏览量"
        :data="flowData?.totalVisit?.today || 0"
        subText="昨日"
        :subData="flowData?.totalVisit?.yestoday || 0"
      />
      <page-data-module
        title="总访客数"
        :data="flowData?.totalVisitor?.today || 0"
        subText="昨日"
        :subData="flowData?.totalVisitor?.yestoday || 0"
      />
      <page-data-module
        title="浏览量(今日)"
        :data="flowData?.visit?.today || 0"
        subText="昨日"
        :subData="flowData?.visit?.yestoday || 0"
      />
      <page-data-module
        title="访客数(今日)"
        :data="flowData?.visitor?.today || 0"
        subText="昨日"
        :subData="flowData?.visitor?.yestoday || 0"
      />
      <page-data-module
        title="新访客"
        :data="flowData?.newVisitor?.today || 0"
        subText="昨日"
        :subData="flowData?.newVisitor?.yestoday || 0"
      />
      <page-data-module
        title="总频次(人均访问)"
        :data="flowData?.frequency?.today || 0"
        subText="昨日"
        :subData="flowData?.frequency?.yestoday || 0"
      />
    </page-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageCard from '@/components/page-card'
import PageDataModule from '@/components/page-data-module'

export default defineComponent({
  components: {
    PageDataModule,
    PageCard
  },
  setup() {
    const store = useStore()

    const flowData = computed(() => store.state.dashboard.flowData)

    return {
      flowData
    }
  }
})
</script>

<style scoped lang="less"></style>
