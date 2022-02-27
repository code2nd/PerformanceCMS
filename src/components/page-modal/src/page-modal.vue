<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      :width="modalConfig.width"
      destroy-on-close
    >
      <base-form
        v-bind="modalConfig"
        v-model="formData"
        :inline="false"
      ></base-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small"
            >取消</el-button
          >
          <el-button type="primary" size="small" @click="handleConfirmClick"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'
import BaseForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      require: true,
      default: () => ({})
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    BaseForm
  },
  setup(props) {
    const formData = ref<any>({})
    const dialogVisible = ref(false)
    const title = ref('模态框')

    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('manage/editPageDataAction', {
          pageName: props.pageName,
          updateData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新增
        store.dispatch('manage/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    return { title, formData, dialogVisible, handleConfirmClick }
  }
})
</script>

<style scoped lang="less">
.page-modal {
  &:deep(.el-dialog__header) {
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
    .el-dialog__headerbtn {
      display: flex;
      margin-top: 4px;
    }
  }
  &:deep(.el-dialog__body) {
    padding: 20px 24px;
    .el-input__suffix-inner {
      align-items: center;
    }
  }
  &:deep(.el-dialog__footer) {
    padding: 20px;
    border-top: 1px solid #f0f0f0;
  }
}
</style>
