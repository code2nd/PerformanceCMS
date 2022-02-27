import { IUserMenu } from '@/service/login/type'
import { RouteRecordRaw } from 'vue-router'

type Route = RouteRecordRaw & { sort: number }

interface IRole {
  id: number
  name: string
  description: string
}

interface IUserInfo {
  id: number
  username: string
  avatar: string
  role: IRole
}

export interface ILoginState {
  token: string
  userInfo: IUserInfo
  userMenus: IUserMenu[]
  permissions: string[]
  routes: Route[]
}
