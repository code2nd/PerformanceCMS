export const contentTableConfig = {
  title: '用户列表',
  showIndexColumn: true,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  columns: [
    /* {
      prop: 'avatar',
      label: '用户头像',
      minWidth: 100
    }, */
    {
      prop: 'username',
      label: '用户名',
      minWidth: 100
    },
    {
      prop: 'roleName',
      label: '角色',
      minWidth: 100
    },
    {
      prop: 'create_time',
      label: '创建时间',
      minWidth: 120
    },
    {
      prop: 'update_time',
      label: '修改时间',
      minWidth: 120
    },
    {
      label: '操作',
      minWidth: 120,
      slotName: 'handler'
    }
  ]
}
