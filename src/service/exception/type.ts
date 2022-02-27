export interface IExceptionMonitor {
  exceptionTotal: number
  exceptionToday: number
  exceptionJsToday: number
  exceptionInterfaceToday: number
}

export interface INameValue {
  name: string
  value: number
}

export interface IExceptionTendency {
  tendency: string[]
  values: number[][]
}
