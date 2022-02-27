<template>
  <div class="data-item">
    <p class="title">
      {{ title }}
      <span class="title-slot">
        <slot name="tip"></slot>
      </span>
    </p>
    <p class="data">{{ data }}<slot name="unit"></slot></p>
    <p class="sub" v-if="subText">
      {{ subText }}<span class="number">{{ subData }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Number,
      required: true
    },
    subText: {
      type: String
    },
    subData: {
      type: Number
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.data-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 98px;
  .title {
    display: flex;
    align-items: center;
    .title-slot {
      margin-left: 4px;
    }
  }
  .title,
  .sub {
    font-size: 14px;
    color: #999;
  }
  .data {
    font-size: 32px;
    color: #363b52;
    font-weight: 700;
    font-family: DINAlternate-Bold, DINAlternate;
  }
  .sub {
    display: flex;
    align-items: cnter;
    .number {
      margin-left: 4px;
    }
  }
}
</style>
