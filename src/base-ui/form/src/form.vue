<template>
  <div class="wy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" :size="size" :inline="inline">
      <template v-for="item in formItems" :key="item.label">
        <el-form-item
          :label="item.label"
          :rules="item.rules"
          :style="formItemStyle"
          :label-width="item.labelWidth"
        >
          <template
            v-if="
              item.type === FormType.INPUT || item.type === FormType.PASSWORD
            "
          >
            <el-input
              :placeholder="item.placeholder"
              :type="item.type === FormType.PASSWORD ? 'password' : 'text'"
              :show-password="item.type === FormType.PASSWORD"
              v-bind="item.otherOptions"
              v-model="formData[`${item.field}`]"
            />
          </template>
          <template v-else-if="item.type === FormType.SELECT">
            <el-select
              style="width: 100%"
              v-bind="item.otherOptions"
              :placeholder="item.placeholder"
              v-model="formData[`${item.field}`]"
            >
              <el-option
                v-for="option in item.options"
                :value="option.key"
                :key="option.key"
                :label="option.value"
              >
              </el-option>
            </el-select>
          </template>
          <template v-else-if="item.type === FormType.DATE_PICKER">
            <el-date-picker
              style="width: 100%"
              value-format="YYYY-MM-DD"
              v-bind="item.otherOptions"
              v-model="formData[`${item.field}`]"
            ></el-date-picker>
          </template>
          <template v-else-if="item.type === FormType.BUTTON">
            <el-button
              v-bind="item.otherOptions"
              @click="handleBtnClick(item.otherOptions.btnType)"
              >{{ item.otherOptions.text }}</el-button
            >
          </template>
        </el-form-item>
      </template>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue'
import { IFromItem, FormType } from '../'
import { BtnType } from '../types'

export default defineComponent({
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Object,
      require: true
    },
    formItems: {
      type: Array as PropType<IFromItem[]>
    },
    labelWidth: {
      type: String,
      default: 'auto'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '6px 0px',
        marginRight: '20px'
      })
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  emit: ['update:modelValue', 'btnClick'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    const formItemStyle = computed(() => ({
      padding: '6px 0px',
      marginRight: '20px',
      ...props.itemStyle
    }))

    watch(formData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })

    const handleBtnClick = (btnType: BtnType) => {
      emit('btnClick', btnType)
    }

    return {
      FormType,
      formData,
      formItemStyle,
      handleBtnClick
    }
  }
})
</script>

<style scoped lang="less">
.wy-form {
  /* padding-top: 22px; */
  &:deep(.el-form-item) {
    margin: 0;
    .el-form-item__label-wrap,
    .el-form-item__content {
      display: flex;
      align-items: center;
      margin: 0 !important;
    }
  }
}
</style>
