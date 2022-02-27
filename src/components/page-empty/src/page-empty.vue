<template>
  <div class="page-empty">
    <el-result title="404" sub-title="Sorry, request error">
      <template #icon>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
      </template>
      <template #extra>
        <el-button type="primary">Back</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
