import { FormType, IFormConfig } from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
import { BtnType } from '@/base-ui/form/types'

export const searchFormConfig: IFormConfig = {
  formItems: [
    {
      type: FormType.INPUT,
      field: 'city',
      label: '城市',
      rules: [],
      placeholder: '根据城市名模糊查询'
    },
    {
      type: FormType.DATE_PICKER,
      field: 'first_time',
      label: '首次访问时间',
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
}
