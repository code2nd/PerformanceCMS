<template>
  <div class="page-search">
    <base-form
      v-bind="searchFormConfig"
      v-model="formData"
      @btnClick="handleBtnClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Refresh, Search } from '@element-plus/icons-vue'
import BaseForm from '@/base-ui/form'

import { BtnType } from '@/base-ui/form/types'
import { handleQueryParameters } from '@/utils/handleQueryParameters'
import { LStorage } from '@/utils/wystorage'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    BaseForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: Record<string, unknown> = {}
    for (const item of formItems) {
      formOriginData[item.field] = item?.defaultValue ?? ''
    }

    const formData = ref(formOriginData)

    // 点击事件
    const handleBtnClick = (btnType: BtnType) => {
      if (btnType === BtnType.QUERY) {
        // 搜索
        const data = handleQueryParameters(formData.value)
        emit('queryBtnClick', data)
        LStorage.set('queryParameters', data)
      } else if (btnType === BtnType.REFRESH) {
        // 重置
        for (const key in formOriginData) {
          formData.value[`${key}`] = formOriginData[key]
        }
        LStorage.set('queryParameters', '')
        // formData.value = formOriginData
        // emit('resetBtnClick')
        emit('resetBtnClick', handleQueryParameters(formData.value))
      }
    }

    return { formData, Refresh, Search, handleBtnClick }
  }
})
</script>

<style scoped lang="less">
.page-search {
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
  background: #ffffff;
}
</style>
