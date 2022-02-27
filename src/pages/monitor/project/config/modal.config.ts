import { FormType, IFormConfig, IKeyValue } from '@/base-ui/form'

export const modalConfig = (projectCategory: IKeyValue[]): IFormConfig => ({
  width: '30%',
  itemStyle: {
    margin: 0,
    marginBottom: '10px'
  },
  labelWidth: '80px',
  formItems: [
    {
      field: 'project',
      type: FormType.INPUT,
      label: '项目名称',
      placeholder: '请输入项目名称'
    },
    {
      field: 'website',
      type: FormType.INPUT,
      label: '网址',
      placeholder: '请输入网址'
    },
    {
      field: 'category',
      type: FormType.SELECT,
      label: '项目类型',
      options: projectCategory
    }
  ]
})
