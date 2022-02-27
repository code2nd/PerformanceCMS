import { RouteRecordRaw } from 'vue-router'

export interface IAccount {
  username: string
  password: string
}

export interface ILoadInfo extends IAccount {
  isKeepPassword: boolean
}

export interface ILoginResult {
  id: number
  username: string
  token: string
}

interface IRole {
  id: number
  name: string
  description: string
}

export interface IUserInfo {
  id: number
  username: string
  avatar: string
  role: IRole
}

export interface IUserMenu {
  id: number
  name: string
  url: string
  icon: string
  sort: number
  type: number
  permission: string
  parentId: number | null
  children: IUserMenu[]
}

export type IRouteRecord = RouteRecordRaw & { sort: number }
