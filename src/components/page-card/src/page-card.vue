<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-head">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.box-card {
  display: flex;
  flex-direction: column;
  &:deep(.el-card__body) {
    flex: 1;
  }
}

/* .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
} */

.item {
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
</style>
