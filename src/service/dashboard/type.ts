type FlowDataItem = {
  today: number
  yestoday: number
}

export interface IFlowData {
  totalVisit: FlowDataItem
  totalVisitor: FlowDataItem
  visit: FlowDataItem
  visitor: FlowDataItem
  newVisitor: FlowDataItem
  frequency: FlowDataItem
}

export interface IVisitCount {
  dateTime: string
  value: number
}

export interface IVisitCost {
  id: number
  dateTime: string
  cost: number
}
