import request from '../'
import { IKeyValue } from '../types'

import { IExceptionMonitor, INameValue, IExceptionTendency } from './type'

enum ExceptionApi {
  EXCEPTION_MONITOR = '/exception/monitor',
  EXCEPTION_PROPORTION = '/exception/proportion',
  EXCEPTION_TENDENCY = '/exception/tendency',
  EXCEPTION_CATEGORY = '/exception_category/list'
}

// 异常监控
export function exceptionMonitorRequest(website_id: number) {
  return request.get<IExceptionMonitor>({
    url: ExceptionApi.EXCEPTION_MONITOR + '/' + website_id
  })
}

// 总异常占比
export function exceptionProportionRequest(website_id: number) {
  return request.get<INameValue[]>({
    url: ExceptionApi.EXCEPTION_PROPORTION + '/' + website_id
  })
}

// 异常趋势
export function exceptionTendencyRequest(website_id: number) {
  return request.get<IExceptionTendency>({
    url: ExceptionApi.EXCEPTION_TENDENCY + '/' + website_id
  })
}

// 异常分类
export function exceptionCategoryListRequest() {
  return request.get<IKeyValue[]>({
    url: ExceptionApi.EXCEPTION_CATEGORY
  })
}
