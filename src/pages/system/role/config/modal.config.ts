import { IForm, FormType } from '@/base-ui/form'

export const modalConfig: IForm = {
  width: '30%',
  labelWidth: '70px',
  formItems: [
    {
      field: 'name',
      type: FormType.INPUT,
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'description',
      type: FormType.INPUT,
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    },
    {
      field: 'auth_level',
      type: FormType.INPUT,
      label: '权限系数',
      placeholder: '请输入权限系数'
    }
  ]
}
