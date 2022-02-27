import { FormType, IFormConfig, IKeyValue } from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
import { BtnType } from '@/base-ui/form'

export const searchFormConfig = (
  projectCategory: IKeyValue[]
): IFormConfig => ({
  formItems: [
    {
      type: FormType.SELECT,
      field: 'category',
      label: '项目类型',
      rules: [],
      placeholder: '请选择项目类型',
      options: projectCategory
    },
    {
      type: FormType.INPUT,
      field: 'project',
      label: '项目名称',
      rules: [],
      placeholder: '根据项目名称名称'
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
  ],
  itemStyle: {
    padding: '10px 0px'
  }
})
