export const contentTableConfig = {
  title: '访客列表',
  showIndexColumn: true,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  columns: [
    {
      prop: 'ip',
      label: 'IP地址',
      minWidth: 120
    },
    {
      prop: 'city',
      label: '城市',
      minWidth: 100
    },
    {
      prop: 'longitude',
      label: '经度',
      minWidth: 120
    },
    {
      prop: 'latitude',
      label: '纬度',
      minWidth: 120
    },
    {
      prop: 'first_time',
      label: '首次访问时间',
      minWidth: 150
    },
    {
      label: '操作',
      minWidth: 120,
      slotName: 'handler'
    }
  ]
}
