<template>
  <div class="content-header">
    <h3 class="page-title">网站访问量地域分布统计</h3>
    <!-- <div class="date-box">
      <el-date-picker
        v-model="date"
        type="date"
        :default-value="date"
        :clearable="false"
      ></el-date-picker>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const date = ref(new Date())
    return {
      date
    }
  }
})
</script>

<style scoped lang="less">
.content-header {
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page-title {
    font-size: 18px;
    font-weight: 600;
  }
  .date-box {
    display: flex;
    align-items: center;
  }
}
</style>
