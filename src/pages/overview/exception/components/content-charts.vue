<template>
  <div class="content-chart">
    <div class="pie">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ pieTitle }}</span>
          </div>
        </template>
        <div class="item">
          <slot name="pie"></slot>
        </div>
      </el-card>
    </div>
    <div class="bar">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ barTitle }}</span>
          </div>
        </template>
        <div class="item">
          <slot name="bar"></slot>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    pieTitle: {
      type: String,
      required: true
    },
    barTitle: {
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
.content-chart {
  margin-bottom: 20px;
  display: flex;
  flex: 1;
  // height: 462px;
  .pie {
    flex: 4;
    margin-right: 20px;
  }
  .bar {
    flex: 6;
  }
  .pie,
  .bar {
    .box-card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      &:deep(.el-card__header) {
        border: none;
      }
      &:deep(.el-card__body) {
        flex: 1;
        padding-top: 0;
        .item {
          height: 100%;
        }
      }
    }
  }
}
</style>
