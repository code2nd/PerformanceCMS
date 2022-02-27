<template>
  <div class="exception">
    <page-search
      :searchFormConfig="searchForm"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="exception"
      moduleName="monitor"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/table.config'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const store = useStore()
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const exceptionCategory = computed(
      () => store.state.exception.exceptionCategoryList
    )

    // 获取异常类型数据
    store.dispatch('exception/getExceptionCategoryData')

    const searchForm = computed(() => searchFormConfig(exceptionCategory.value))

    return {
      searchForm,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.exception {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
