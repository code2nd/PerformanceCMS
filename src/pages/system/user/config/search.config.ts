import { FormType, IFormConfig, IKeyValue } from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
import { BtnType } from '@/base-ui/form'

export const searchFormConfig = (roleList: IKeyValue[]): IFormConfig => ({
  formItems: [
    {
      type: FormType.SELECT,
      field: 'role',
      label: '角色',
      rules: [],
      options: roleList
    },
    {
      type: FormType.INPUT,
      field: 'username',
      label: '用户名',
      rules: [],
      placeholder: '根据用户名模糊查询'
    },
    {
      type: FormType.DATE_PICKER,
      field: 'create_time',
      label: '创建时间',
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
