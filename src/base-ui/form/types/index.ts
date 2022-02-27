// type FormType = 'input' | 'password' | 'select' | 'datepicker'
export enum FormType {
  INPUT = 'input',
  PASSWORD = 'password',
  SELECT = 'select',
  DATE_PICKER = 'date',
  DATE_RANGE = 'daterange',
  BUTTON = 'button'
}

export enum BtnType {
  REFRESH = 'refresh',
  QUERY = 'query',
  UPDATE = 'update',
  DELETE = 'delete',
  CREATE = 'create'
}

// year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange

export interface IFromItem {
  field: string
  type: FormType
  label?: string
  labelWidth?: string | number
  rules?: any
  placeholder?: string
  // 针对 select
  options?: any[]
  // 针对特殊属性
  otherOptions?: any
  colLayout?: any
  defaultValue?: any
}

export interface IForm {
  formItems: IFromItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
  width?: string
}

export type FormFunction = (...arg: IKeyValue[][]) => IForm

export type IFormConfig = IForm | FormFunction

export interface IKeyValue {
  key: number
  value: string
}
