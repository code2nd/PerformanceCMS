<template>
  <div class="layout">
    <el-header class="header">
      <nav-header />
    </el-header>
    <el-container class="content">
      <template v-if="currentPage === '/home'">
        <router-view></router-view>
      </template>
      <template v-else>
        <layout-row :menus="menus" :activeMenuId="activeMenuId" />
      </template>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavHeader from '@/components/nav-header'

import { useStore } from '@/store'

import LayoutRow from './layout-row.vue'

import { useMenus } from '../hooks/useMenus'
import { useSocket } from '../hooks/useSocket'

export default defineComponent({
  components: {
    NavHeader,
    LayoutRow
  },
  setup() {
    const store = useStore()

    useSocket()

    // 记录当前路由
    const route = useRoute()
    // 第一次加载及刷新页面
    store.commit('common/setCurrentPage', route.path)
    watch(
      () => route.path,
      () => {
        // 路由切换
        store.commit('common/setCurrentPage', route.path)
      }
    )

    const [currentPage, activeMenuId, menus] = useMenus()

    return {
      currentPage,
      activeMenuId,
      menus
    }
  }
})
</script>

<style scoped lang="less">
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ebeef5;
  .header {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-bottom: 1px solid #e7e7e9;
    // margin-bottom: 10px;
  }
  .content {
    flex: 1;
    height: 0;
  }
}
</style>
