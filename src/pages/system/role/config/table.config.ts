export const contentTableConfig = {
  title: '角色列表',
  showIndexColumn: true,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  columns: [
    {
      prop: 'name',
      label: '角色名称',
      minWidth: 100
    },
    {
      prop: 'description',
      label: '权限描述',
      minWidth: 200
    },
    {
      prop: 'auth_level',
      label: '权限等级',
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
