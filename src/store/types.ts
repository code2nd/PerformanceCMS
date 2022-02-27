import { ILoginState } from './login/type'
// import { ISystemState } from './main/system/types'
import { IDashboardState } from './dashboard/type'
import { IHomeState } from './home/type'
import { ICommonState } from './common/type'
import { IManageState } from './manage/type'
import { IDistributionState } from './distribution/type'
import { IExceptionState } from './exception/type'
import { IPerformanceState } from './performance/type'

export interface IRootState {
  test: string
}

export interface IRootWithModule {
  common: ICommonState
  login: ILoginState
  // system: ISystemState
  dashboard: IDashboardState
  home: IHomeState
  manage: IManageState
  distribution: IDistributionState
  exception: IExceptionState
  performance: IPerformanceState
}

export type IStoreType = IRootState & IRootWithModule
