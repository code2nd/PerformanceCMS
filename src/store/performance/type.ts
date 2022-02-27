import {
  IPerformancePage,
  IInterfaceCount,
  IInterfaceTop,
  INameValue
} from '@/service/performance/type'

export interface IPerformanceState {
  performancePage: IPerformancePage
  performanceCost: INameValue[]
  interfaceCount: IInterfaceCount
  interfaceCost: INameValue[]
  interfaceTop: IInterfaceTop[]
}
