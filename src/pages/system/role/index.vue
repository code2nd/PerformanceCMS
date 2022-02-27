<template>
  <div class="role">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
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
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'
import { useStore } from '@/store'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { contentTableConfig } from './config/table.config'
import { modalConfig } from './config/modal.config'

import { menuMapLeafKeys } from '@/utils/map-menus'

import { usePageModal } from '@/hooks/userPageModal'

export default defineComponent({
  components: {
    PageContent,
    PageModal
  },
  setup() {
    // 处理 pageModal的hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      // 处理选中
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [pageModalRef, defaultInfo, handleEditData, handleCreateData] =
      usePageModal(undefined, editCallback)

    const store = useStore()
    const menus = computed(() => store.state.manage.menuList)

    if (!menus.value.length) {
      // 请求menuList
      store.dispatch('manage/getPageListAction', {
        pageName: 'menu'
      })
    }

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
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.role {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
