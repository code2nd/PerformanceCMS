export const contentTableConfig = {
  title: '菜单',
  showIndexColumn: false,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  columns: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: 100
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: 100
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: 100
    },
    {
      prop: 'icon',
      label: '菜单icon',
      minWidth: 100
    },
    {
      prop: 'permission',
      label: '按钮权限',
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
