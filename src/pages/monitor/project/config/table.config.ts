export const contentTableConfig = {
  title: '项目列表',
  showIndexColumn: true,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  columns: [
    {
      prop: 'project',
      label: '项目名称',
      minWidth: 100
    },
    {
      prop: 'website',
      label: '网址',
      minWidth: 200
    },
    {
      prop: 'categoryName',
      label: '项目类型',
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
