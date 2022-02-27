<template>
  <div class="interface-table">
    <base-table v-bind="interfaceConfig" :dataSource="dataSource">
      <template #fixed2="scope">
        {{ scope.row.avg.toFixed(2) }}
      </template>
    </base-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BaseTable from '@/base-ui/table'

import { interfaceConfig } from '../config/interface.config'
import { IInterfaceTop } from '@/service/performance/type'

export default defineComponent({
  props: {
    dataSource: {
      type: Array as PropType<IInterfaceTop[]>,
      required: true
    }
  },
  components: {
    BaseTable
  },
  setup() {
    return { interfaceConfig }
  }
})
</script>

<style scoped lang="less">
.interface-table {
  &:deep(.el-table) {
    &::before {
      height: 0;
    }
  }
  &:deep(.el-table__row) {
    td {
      padding: 6px 0;
      border: none;
    }
  }

  &:deep(.el-table__header) {
    th {
      border: none;
    }
  }
}
</style>
