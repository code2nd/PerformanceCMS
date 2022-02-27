export const contentTableConfig = {
  title: '接口访问记录',
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
      prop: 'interfaceName',
      label: '接口名',
      minWidth: 160
    },
    {
      prop: 'size',
      label: '数据大小(kb)',
      minWidth: 100
    },
    {
      prop: 'cost',
      label: '请求耗时(ms)',
      minWidth: 100
    },
    {
      prop: 'create_time',
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
