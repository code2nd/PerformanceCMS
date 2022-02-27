import request from '../'
import { IKeyValue } from '../types'
import { IPageData } from './type'

// 获取数据
export function getPageListData(
  url: string,
  queryInfo: Record<string, unknown>
) {
  return request.get<IPageData>({
    url,
    params: queryInfo
  })
}

// 删除数据 /xxx/:id
export function deletePageData(url: string) {
  return request.delete<any>({
    url
  })
}

// 新增
export function createPageData(url: string, data: Record<string, unknown>) {
  return request.post<any>({
    url,
    data
  })
}

// 修改
export function updatePageData(url: string, data: Record<string, unknown>) {
  return request.put<any>({
    url,
    data
  })
}

// 获取角色列表
export function getRoleList() {
  return request.get<IKeyValue[]>({
    url: '/exception_category/list'
  })
}
