import request from '../'
import {
  IPerformancePage,
  INameValue,
  IInterfaceCount,
  IInterfaceTop
} from './type'

enum PerformanceApi {
  PERFORMANCE_PAGE = '/performance/page',
  PERFORMANCE_COST = '/performance/cost',
  INTERFACE_COUNT = '/interface/count',
  INTERFACE_COST = '/interface/cost',
  INTERFACE_TOP = '/interface/top'
}

// 获取页面性能数据
export function performancePageRequest(website_id: number) {
  return request.get<IPerformancePage>({
    url: PerformanceApi.PERFORMANCE_PAGE + '/' + website_id
  })
}

// 页面加载耗时分段数据
export function performanceCostRequest(website_id: number) {
  return request.get<INameValue[]>({
    url: PerformanceApi.PERFORMANCE_COST + '/' + website_id
  })
}

// 接口性能
export function interfaceCountRequest(website_id: number) {
  return request.get<IInterfaceCount[]>({
    url: PerformanceApi.INTERFACE_COUNT + '/' + website_id
  })
}

// 接口请求耗时分段数据
export function interfaceCostRequest(website_id: number) {
  return request.get<INameValue[]>({
    url: PerformanceApi.INTERFACE_COST + '/' + website_id
  })
}

// 接口请求耗时top10
export function interfaceTopRequest(website_id: number) {
  return request.get<IInterfaceTop[]>({
    url: PerformanceApi.INTERFACE_TOP + '/' + website_id
  })
}
