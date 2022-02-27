import request from '../'
import { IAccount, ILoginResult, IUserInfo, IUserMenu } from './type'
import { IDataType } from '../types'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/user/',
  UserMenus = '/menu/' // 用法 /menu/:id
}

// 用户名密码登录
export function accountLoginRequest(account: IAccount) {
  return request.post<ILoginResult>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

// 通过用户id获取用户信息
export function requestUserInfoById(id: number) {
  return request.get<IUserInfo>({
    url: LoginApi.LoginUserInfo + id
  })
}

// 获取用户角色对应的菜单
export function requestUserMenusByRoleId(id: number) {
  return request.get<IUserMenu[]>({
    url: LoginApi.UserMenus + id
  })
}
