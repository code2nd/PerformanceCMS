export const contentTableConfig = {
  title: '性能参数列表(单位：ms)',
  showIndexColumn: true,
  showSelectionColumn: true,
  border: false,
  align: 'center',
  columns: [
    {
      prop: 'project',
      label: '项目名称',
      minWidth: 140
    },
    {
      prop: 'visitor',
      label: '访问者ip',
      minWidth: 120
    },
    {
      prop: 'TTFB',
      label: '首字节网络请求时间(TTFB)',
      minWidth: 180
    },
    {
      prop: 'FP',
      label: '首次绘制时间(FP)',
      minWidth: 120
    },
    {
      prop: 'FCP',
      label: '首次内容绘制时间(FCP)',
      minWidth: 150
    },
    {
      prop: 'domContentLoaded',
      label: 'Dom加载完成时间',
      minWidth: 120
    },
    {
      prop: 'load',
      label: '网站加载完成时间',
      minWidth: 120
    },
    {
      prop: 'domInteractive',
      label: '首次可交互时间',
      minWidth: 120
    },
    {
      prop: 'parseDomTime',
      label: 'Dom解析耗时',
      minWidth: 100
    },
    {
      prop: 'lookupDomainTime',
      label: 'DNS查询耗时',
      minWidth: 100
    },
    {
      prop: 'connectTime',
      label: 'TCP连接耗时',
      minWidth: 100
    },
    {
      prop: 'requestTime',
      label: '网络传输耗时',
      minWidth: 100
    },
    {
      prop: 'requestDocumentTime',
      label: '请求文档耗时',
      minWidth: 100
    },
    {
      prop: 'responseDocumentTime',
      label: '接收文档耗时',
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
