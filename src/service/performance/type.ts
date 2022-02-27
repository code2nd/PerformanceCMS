export interface IPerformancePage {
  avgTTFBTotal: number
  avgTTFBToday: number
  avgDomTotal: number
  avgDomToday: number
  avgLoadTotal: number
  avgLoadToday: number
}

export interface INameValue {
  name: string
  value: number
}

export interface IInterfaceCount {
  countTotal: number
  countToday: number
  costTotal: number
  costToday: number
}

export interface IInterfaceTop {
  interface_name: string
  count: number
  avg: number
}
