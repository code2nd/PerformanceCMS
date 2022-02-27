export const contentTableConfig = {
  title: '异常分类',
  showIndexColumn: true,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  columns: [
    {
      prop: 'category_name',
      label: '分类名称',
      minWidth: 100
    },
    {
      label: '操作',
      minWidth: 100,
      slotName: 'handler'
    }
  ]
}
