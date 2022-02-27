export const contentTableConfig = {
  title: '项目访问记录',
  showIndexColumn: true,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  columns: [
    {
      prop: 'website',
      label: '网址',
      minWidth: 200
    },
    {
      prop: 'visitor',
      label: '访问者ip',
      minWidth: 120
    },
    {
      prop: 'cost',
      label: '加载耗时(ms)',
      minWidth: 100
    },
    {
      prop: 'visit_time',
      label: '访问时间',
      minWidth: 150
    },
    {
      label: '操作',
      minWidth: 120,
      slotName: 'handler'
    }
  ]
}
