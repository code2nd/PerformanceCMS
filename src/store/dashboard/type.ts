import { IFlowData, IVisitCount, IVisitCost } from '@/service/dashboard/type'

export interface IDashboardState {
  flowData: IFlowData
  visitCount: IVisitCount[]
  visitCost: IVisitCost[]
}
