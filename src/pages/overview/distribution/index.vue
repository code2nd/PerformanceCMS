<template>
  <div class="distribution">
    <content-header />
    <div class="content-main">
      <div class="map">
        <content-map :mapData="mapData" />
      </div>
      <div class="rank">
        <content-rank :rankData="rankData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useStore } from '@/store'

import ContentHeader from './components/content-header.vue'
import ContentMap from './components/content-map.vue'
import ContentRank from './components/content-rank.vue'

export default defineComponent({
  components: {
    ContentHeader,
    ContentMap,
    ContentRank
  },
  setup() {
    const store = useStore()

    // 获取数据
    const mapData = computed(() => store.state.distribution.mapData)
    const rankData = computed(() => store.state.distribution.rankData)
    const project = computed(() => store.state.common.activeProject)

    // 请求数据
    watch(project, () => getData())
    getData()
    function getData() {
      store.dispatch('distribution/getMapData', project.value)
      store.dispatch('distribution/getRankData', project.value)
    }

    return {
      mapData,
      rankData
    }
  }
})
</script>

<style scoped lang="less">
.distribution {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  .content-main {
    flex: 1;
    display: flex;
    .map,
    .rank {
      /* background: #ffffff;
      border-radius: 4px; */
    }
    .map {
      flex: 7;
      margin-right: 20px;
    }
    .rank {
      flex: 3;
    }
  }
}
</style>
