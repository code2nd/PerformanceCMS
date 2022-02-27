export interface IHomeState {
  projectList: IProject[]
  projectCount: number
}

export interface IProject {
  id: number
  name: string
  website: string
  data: {
    users: number
    PV: number
    UV: number
    js: number
    interface: number
  }
}
