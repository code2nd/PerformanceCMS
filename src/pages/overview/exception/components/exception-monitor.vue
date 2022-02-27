<template>
  <div class="exception-monitor">
    <page-card title="异常监控">
      <page-data-module
        title="总异常数"
        :data="exceptions?.exceptionTotal || 0"
      />
      <!-- <page-data-module title="JS异常数" :data="exceptions.js || 0" />
      <page-data-module title="接口异常数" :data="exceptions.interface || 0" /> -->
      <page-data-module
        title="今日总异常数"
        :data="exceptions?.exceptionToday || 0"
      />
      <page-data-module
        title="今日JS异常数"
        :data="exceptions?.exceptionJsToday || 0"
      />
      <page-data-module
        title="今日接口异常数"
        :data="exceptions?.exceptionInterfaceToday || 0"
      />
    </page-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import PageCard from '@/components/page-card'
import PageDataModule from '@/components/page-data-module'
import { IExceptionMonitor } from '@/service/exception/type'

export default defineComponent({
  props: {
    exceptions: {
      type: Object as PropType<IExceptionMonitor>,
      required: true
    }
  },
  components: {
    PageCard,
    PageDataModule
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.exception-monitor {
  margin-bottom: 20px;
}
</style>
