import {
  IExceptionMonitor,
  INameValue,
  IExceptionTendency
} from '@/service/exception/type'
import { IKeyValue } from '@/service/types'

export interface IExceptionState {
  exceptionMonitor: IExceptionMonitor
  exceptionProportion: INameValue[]
  exceptionTendency: IExceptionTendency
  exceptionCategoryList: IKeyValue[]
  alarmCount: number
}
