<template>
  <div class="home-project">
    <div class="project-header">
      <div class="project-title">
        <img
          class="project-icon"
          src="@/assets/imgs/html5.svg"
          alt="project-icon"
        />
        <span class="project-name"> {{ data.name }} </span>
      </div>
      <a
        class="project-link"
        :href="data.website"
        target="_blank"
        @click="handleAclick"
      >
        <img
          class="project-link-icon"
          src="@/assets/imgs/link.svg"
          alt="link"
        />
      </a>
    </div>
    <div class="statistics">
      <page-statistics :data="data.data.users" title="用户总数" />
      <page-statistics :data="data.data.PV" title="PV" />
      <page-statistics :data="data.data.UV" title="UV" />
    </div>
    <div class="exceptions">
      <div class="exce-column">
        <p class="exce-item">
          JS报错： <span class="exce-count">{{ data.data.js }}</span
          >次
        </p>
        <p class="exce-item">
          接口报错： <span class="exce-count">{{ data.data.interface }}</span
          >次
        </p>
      </div>
      <div class="exce-column">
        <p class="exce-item">服务端报错： 暂未统计</p>
        <p class="exce-item">资源加载异常：暂未统计</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageStatistics from '@/components/page-statistics'

export default defineComponent({
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  components: {
    PageStatistics
  },
  setup() {
    const handleAclick = (event: Event) => {
      event.stopPropagation()
    }

    return {
      handleAclick
    }
  }
})
</script>

<style scoped lang="less">
.home-project {
  height: 210px;
  padding: 0 24px;
  position: relative;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
  }
  .project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    height: 66px;
    .project-title {
      display: flex;
      align-items: center;
      .project-icon {
        width: 18px;
        height: 18px;
        margin-right: 8px;
      }
      .project-name {
        line-height: 18px;
        font-weight: bolder;
        color: #363b52;
      }
    }
    .project-link {
      display: flex;
      justify-content: flex-end;
      .project-link-icon {
        width: 18px;
        height: 18px;
      }
    }
  }

  .statistics {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .exceptions {
    display: flex;
    flex-direction: column;
    /*  align-items: center; */
    width: 100%;
    height: 60px;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #dcdde5;
    font-size: 14px;
    .exce-column {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      .exce-item {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex: 1;
        color: #737376;
      }
      .exce-count {
        font-size: 16px;
        color: #ff7626;
        margin-right: 4px;
      }
    }
  }
}
</style>
