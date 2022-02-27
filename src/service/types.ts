/* export interface IDataType<T = any> {
  code: number
  data: T
} */

export interface IDataType {
  errorCode: number
  msg: string
  request: string
}

export interface IKeyValue {
  key: number
  value: string
}
