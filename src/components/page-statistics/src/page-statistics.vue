<template>
  <div class="page-statistics">
    <div class="data">{{ data }}</div>
    <span class="name">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Number,
      require: true
    },
    title: {
      type: String,
      require: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.page-statistics {
  display: flex;
  flex-direction: column;
  .data {
    font-size: 26px;
    color: #363b52;
    text-align: center;
    font-family: DIN Alternate Bold;
  }
  .name {
    margin-top: 4px;
    font-size: 14px;
    color: #a3a5b0;
    text-align: center;
  }
}
</style>
