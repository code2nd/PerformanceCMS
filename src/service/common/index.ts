import request from '../'
import { IProject } from '@/store/home/type'
import { IKeyValue } from '../types'

enum CommonApi {
  PROJECT_LIST = '/project/simple',
  PROJECT_CATEGORYLIST = '/project_category/list',
  ROLE_LIST = '/role/list'
}

// 项目列表（只需id和name）
export function projectListRequest() {
  return request.get<IProject[]>({
    url: CommonApi.PROJECT_LIST
  })
}

// 获取项目分类列表
export function projectCategoryList() {
  return request.get<IKeyValue[]>({
    url: CommonApi.PROJECT_CATEGORYLIST
  })
}

// 获取角色列表
export function roleListRequest() {
  return request.get<IKeyValue[]>({
    url: CommonApi.ROLE_LIST
  })
}
