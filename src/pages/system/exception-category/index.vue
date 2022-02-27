<template>
  <div class="exception-category">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="exception_category"
      moduleName="system"
      :ceratable="true"
      @createBtnClick="handleCreateData"
      @editBtnClick="handleEditData"
    >
    </page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
      pageName="exception_category"
    >
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { contentTableConfig } from './config/table.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/userPageModal'

export default defineComponent({
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, handleEditData, handleCreateData] =
      usePageModal()

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = checkedKeys.concat(halfCheckedKeys).join(',')
      otherInfo.value = { menuList }
    }

    return {
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleCreateData,
      otherInfo,
      handleCheckChange
    }
  }
})
</script>

<style scoped lang="less">
.exception-category {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
