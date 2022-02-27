<template>
  <div class="chart-list">
    <div class="chart">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ chartTitle }}</span>
          </div>
        </template>
        <div class="item">
          <slot name="chart"></slot>
        </div>
      </el-card>
    </div>
    <div class="list">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ rankTitle }}</span>
          </div>
        </template>
        <div class="item">
          <slot name="list"></slot>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    chartTitle: {
      type: String,
      required: true
    },
    rankTitle: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.chart-list {
  margin-bottom: 20px;
  display: flex;
  height: 462px;
  .chart {
    flex: 9;
    margin-right: 20px;
  }
  .list {
    flex: 11;
  }
  .chart,
  .list {
    .box-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      &:deep(.el-card__header) {
        border: none;
      }
      &:deep(.el-card__body) {
        flex: 1;
        padding-top: 0;
      }
    }
  }
}
</style>
