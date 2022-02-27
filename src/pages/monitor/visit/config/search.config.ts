import { FormType, IFormConfig } from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
import { BtnType } from '@/base-ui/form/types'

export const searchFormConfig: IFormConfig = {
  formItems: [
    {
      type: FormType.INPUT,
      field: 'website',
      label: '网址',
      rules: [],
      placeholder: '根据网址模糊查询'
    },
    {
      type: FormType.INPUT,
      field: 'visitor',
      label: '访问者ip',
      rules: [],
      placeholder: '根据访问者ip模糊查询'
    },
    {
      type: FormType.DATE_PICKER,
      field: 'visit_time',
      label: '访问时间',
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
