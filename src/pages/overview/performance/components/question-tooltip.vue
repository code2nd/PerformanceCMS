<template>
  <el-tooltip class="box-item" effect="dark" placement="top-end">
    <template #content> {{ content }} </template>
    <el-icon><question-filled /></el-icon>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { QuestionFilled } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true
    }
  },
  components: {
    QuestionFilled
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
