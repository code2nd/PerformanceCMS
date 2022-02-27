import request from '../'
import { IDataType } from '@/components/page-echarts/types'

enum DistributionApi {
  MAP_DATA = '/visit/distribution',
  RANK_DATA = '/visit/top'
}

// 网站访问地域分布地图
export function mapDataRequest(website_id: number) {
  return request.get<IDataType[]>({
    url: DistributionApi.MAP_DATA + '/' + website_id
  })
}

// 网站访问地域top榜
export function rankDataRequest(website_id: number) {
  return request.get<IDataType[]>({
    url: DistributionApi.RANK_DATA + '/' + website_id
  })
}
