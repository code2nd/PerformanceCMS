import { IKeyValue } from '@/service/types'

export interface ICommonState {
  currentPage: string
  activeMenuId: number
  projectList: IProject[]
  activeProject: number | null
  activeNavId: number | null
  projectCategoryList: IKeyValue[] | null
  roleList: IKeyValue[]
}

export interface IProject {
  id: number
  name: string
  website?: string
  data?: {
    users: number
    PV: number
    UV: number
    js: number
    interface: number
  }
}
