import request from '../'
import { IFlowData, IVisitCount, IVisitCost } from './type'

enum DashboardApi {
  FLOW_DATA = '/visit/flow_data',
  VISIT_COUNT = '/visit/count',
  VISIT_COST = '/visit/cost'
}

// 流量数据
export function flowDataRequest(website: number) {
  return request.get<IFlowData>({
    url: DashboardApi.FLOW_DATA + '/' + website
  })
}

// 网站访问量统计
export function visitCountRequest(website: number) {
  return request.get<IVisitCount[]>({
    url: DashboardApi.VISIT_COUNT + '/' + website
  })
}

// 网站打开耗费时间统计
export function visitCostRequest(website: number) {
  return request.get<IVisitCost[]>({
    url: DashboardApi.VISIT_COST + '/' + website
  })
}
