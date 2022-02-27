import { FormType, IFormConfig, IKeyValue } from '@/base-ui/form'

export const modalConfig = (roleList: IKeyValue[]): IFormConfig => ({
  width: '30%',
  labelWidth: '70px',
  itemStyle: {
    margin: 0,
    marginBottom: '10px'
  },
  formItems: [
    {
      field: 'username',
      type: FormType.INPUT,
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'role',
      type: FormType.SELECT,
      label: '角色',
      options: roleList
    },
    {
      field: 'password1',
      type: FormType.PASSWORD,
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'password2',
      type: FormType.PASSWORD,
      label: '确认密码',
      placeholder: '请输入密码密码'
    }
  ]
})
