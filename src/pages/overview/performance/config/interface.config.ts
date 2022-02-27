export const interfaceConfig = {
  showHeader: false,
  showFooter: false,
  border: false,
  align: 'left',
  size: 'small',
  columns: [
    {
      prop: 'interface_name',
      label: '接口地址',
      minWidth: 160
    },
    {
      prop: 'count',
      label: '数量',
      minWidth: 100
    },
    {
      prop: 'avg',
      label: '平均耗时(ms)',
      minWidth: 100,
      slotName: 'fixed2'
    }
  ]
}
