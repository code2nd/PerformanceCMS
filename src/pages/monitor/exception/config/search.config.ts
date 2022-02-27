import { FormType, IFormConfig, IKeyValue } from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
import { BtnType } from '@/base-ui/form/types'

export const searchFormConfig = (
  exceptionCategory: IKeyValue[]
): IFormConfig => ({
  formItems: [
    {
      type: FormType.SELECT,
      field: 'category',
      label: '异常类型',
      rules: [],
      options: exceptionCategory,
      otherOptions: {
        clearable: true
      }
    },
    {
      type: FormType.INPUT,
      field: 'project',
      label: '项目名称',
      rules: [],
      placeholder: '根据项目名称模糊查询'
    },
    {
      type: FormType.DATE_PICKER,
      field: 'occurred_time',
      label: '发生时间',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: FormType.DATE_RANGE
      }
    },
    {
      type: FormType.BUTTON,
      field: 'search',
      labelWidth: '1px',
      otherOptions: {
        type: 'primary',
        text: '查询',
        icon: Search,
        btnType: BtnType.QUERY
      }
    },
    {
      type: FormType.BUTTON,
      field: 'refresh',
      labelWidth: '1px',
      otherOptions: {
        type: 'primary',
        text: '重置',
        icon: Refresh,
        btnType: BtnType.REFRESH
      }
    }
  ]
})
