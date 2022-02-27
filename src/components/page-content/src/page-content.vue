<!--
  v-model:page v-model默认使用 modelValue 作为 prop 和 update:modelValue 作为事件，
  取了名字之后(v-model:page)就是在组件上绑定一个page prop，并发出 update:page事件来进行同步
-->
<template>
  <div class="page-content">
    <base-table
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :dataSource="dataList"
      :dataCount="dataCount"
      @selectionChange="handleSelectionChange"
    >
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button
          v-if="ceratable"
          :disabled="!isCreate"
          type="primary"
          size="small"
          @click="handleCreateClick"
          >新增</el-button
        >
        <el-button
          :disabled="!isDelete"
          type="primary"
          size="small"
          @click="handleDeleteClick"
          >批量删除</el-button
        >
      </template>
      <!-- 列中的插槽 -->
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">{{
        $filters.formatTime(scope.row.create_time)
      }}</template>
      <template #updateAt="scope">{{
        $filters.formatTime(scope.row.create_time)
      }}</template>
      <template #handler="scope">
        <div class="handler-btns">
          <el-button
            :disabled="!isUpdate"
            size="small"
            type="text"
            :icon="Edit"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            :disabled="!isDelete"
            size="small"
            type="text"
            :icon="Delete"
            @click="handleDeleteClick(scope.row.id)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 动态设置的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </base-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import { useStore } from '@/store'
import BaseTable from '@/base-ui/table'
import { Edit, Delete, Refresh } from '@element-plus/icons-vue'
import { usePermission } from '@/hooks/usePermission'
import { LStorage } from '@/utils/wystorage'

export default defineComponent({
  props: {
    pageName: {
      type: String,
      require: true
    },
    moduleName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      require: true
    },
    ceratable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseTable
  },
  emit: ['createBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 获取操作权限
    const isCreate = usePermission(
      props.moduleName,
      props.pageName as string,
      'create'
    ) // 是否有新建权限
    const isUpdate = usePermission(
      props.moduleName,
      props.pageName as string,
      'update'
    )
    const isDelete = usePermission(
      props.moduleName,
      props.pageName as string,
      'delete'
    )
    /* const isQuery = usePermission(
      props.moduleName,
      props.pageName as string,
      'query'
    ) */

    // 双向绑定pageInfo
    const pageInfo = ref({ page: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      const storedQueryInfo = LStorage.get('queryParameters')
      store.dispatch('manage/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          ...storedQueryInfo,
          page: pageInfo.value.page,
          pageSize: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`manage/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`manage/pageListCount`](props.pageName)
    )

    // 获取其他动态插槽名称
    const fixedSlots = ['handler']
    const otherPropSlots = props.contentTableConfig?.columns.filter(
      (item: any) => {
        if (fixedSlots.includes(item.slotName)) return false
        return true
      }
    )

    // 事件
    const handleSelectionChange = (selection: any) => {
      console.log('selection: ', selection)
    }

    // 删除
    const handleDeleteClick = (item: any) => {
      /* store.dispatch('manage/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      }) */
      console.log(item)
    }

    // 新建
    const handleCreateClick = () => {
      emit('createBtnClick')
    }

    // 编辑
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      // icon
      Edit,
      Delete,
      Refresh,
      // data
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      // event
      handleSelectionChange,
      handleDeleteClick,
      handleCreateClick,
      handleEditClick,
      // func
      getPageData,
      // 权限
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  height: 100%;
  background: #ffffff;
  padding: 0 20px;
}
</style>
