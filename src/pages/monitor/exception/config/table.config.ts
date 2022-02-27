export const contentTableConfig = {
  title: '异常列表',
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
      prop: 'visitor',
      label: '访问者ip',
      minWidth: 100
    },
    {
      prop: 'category',
      label: '异常类型',
      minWidth: 100
    },
    {
      prop: 'content',
      label: '异常信息',
      minWidth: 200
    },
    {
      prop: 'occurred_time',
      label: '发生时间',
      minWidth: 120
    },
    {
      label: '操作',
      minWidth: 120,
      slotName: 'handler'
    }
  ]
}
