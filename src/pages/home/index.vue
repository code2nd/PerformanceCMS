<template>
  <div class="home">
    <div class="home-handle">
      <p class="tips">
        注：点击以下项目可查看详情，点击项目右上角链接可访问项目
      </p>
      <page-search
        :searchFormConfig="searchForm"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      />
    </div>
    <home-page-content ref="pageContentRef" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import HomePageContent from './components/home-page-content/index.vue'

import { searchFormConfig } from './config/search.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'home',
  components: {
    PageSearch,
    HomePageContent
  },
  setup() {
    const store = useStore()

    // 获取项目分类列表
    store.dispatch('common/getProjectCategoryListAcion')
    const options = computed(() => store.state.common.projectCategoryList)
    const searchForm = computed(() => searchFormConfig(options.value || []))

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    return {
      searchForm,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  .home-handle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding-left: 20px;
    .tips {
      color: #606266;
      font-size: 14px;
    }
    .page-search {
      width: auto;
      margin: 0;
      padding: 0;
      &:deep(.el-form) {
        text-align: right;
      }
    }
  }
}
</style>
