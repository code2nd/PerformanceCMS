import request from '../'
import { IFilter } from './type'
import { IPageData } from '@/service/manage/type'

enum HomeApi {
  ProjectList = '/project/statitics'
}

// 项目列表（包含统计信息）
export function projectListRequest(filter: IFilter) {
  return request.get<IPageData>({
    url: HomeApi.ProjectList,
    params: filter
  })
}
