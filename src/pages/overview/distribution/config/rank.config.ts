export const rankConfig = {
  showHeader: false,
  showFooter: false,
  border: false,
  align: 'center',
  size: 'small',
  showIndexColumn: true,
  indexColumnName: '排名',
  columns: [
    {
      prop: 'name',
      label: '城市',
      minWidth: 100
    },
    {
      prop: 'value',
      label: '访问量',
      minWidth: 100
    }
  ]
}
