import { IForm, FormType } from '@/base-ui/form'

export const modalConfig: IForm = {
  width: '30%',
  formItems: [
    {
      field: 'category_name',
      type: FormType.INPUT,
      label: '分类名称',
      placeholder: '请输入分类名称'
    }
  ]
}
