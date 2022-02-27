<template>
  <div class="project">
    <page-search
      :searchFormConfig="searchForm"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="project"
      moduleName="monitor"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalForm"
      pageName="project"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/table.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/userPageModal'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore()
    const projectCategoryList = computed(
      () => store.state.common.projectCategoryList
    )

    if (!projectCategoryList.value) {
      store.dispatch('common/getProjectCategoryListAcion')
    }

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const editCallback = (/* item: any */) => {
      // console.log('item --- ', item)
    }

    const [pageModalRef, defaultInfo, handleEditData] = usePageModal(
      undefined,
      editCallback
    )

    const searchForm = computed(() =>
      searchFormConfig(projectCategoryList.value || [])
    )
    const modalForm = computed(() =>
      modalConfig(projectCategoryList.value || [])
    )

    return {
      pageModalRef,
      defaultInfo,
      searchForm,
      modalForm,
      contentTableConfig,
      // modalConfig,
      pageContentRef,
      handleEditData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.project {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
