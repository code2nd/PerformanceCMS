<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchForm"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="user"
      moduleName="system"
      :ceratable="true"
      @editBtnClick="handleEditData"
      @createBtnClick="handleCreateData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalForm"
      pageName="user"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/table.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/userPageModal'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const store = useStore()
    const roleList = computed(() => store.state.common.roleList)

    store.dispatch('common/getRoleList')

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const [pageModalRef, defaultInfo, handleEditData, handleCreateData] =
      usePageModal()

    const searchForm = computed(() => searchFormConfig(roleList.value || []))
    const modalForm = computed(() => modalConfig(roleList.value || []))

    return {
      pageModalRef,
      defaultInfo,
      searchForm,
      modalForm,
      contentTableConfig,
      pageContentRef,
      handleEditData,
      handleCreateData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.user {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
