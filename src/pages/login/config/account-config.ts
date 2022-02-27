export const rules = {
  username: [
    {
      required: true,
      message: '用户名是必填的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10位字母或数字组成',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,16}$/,
      message: '密码必须是6-16位字母或数字组成',
      trigger: 'blur'
    }
  ]
}
