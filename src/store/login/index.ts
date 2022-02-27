import { Module } from 'vuex'
import router from '@/router'
import { Md5 } from 'ts-md5/dist/md5'
import { ILoginState } from './type'
import { IRootState } from '../types'
import { ILoadInfo, IUserInfo, IUserMenu } from '@/service/login/type'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'

import { LStorage } from '@/utils/wystorage'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: <IUserInfo>{},
      userMenus: [],
      permissions: [],
      routes: []
    }
  },
  getters: {},
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo
    },
    setUserMenus(state, userMenus: IUserMenu[]) {
      state.userMenus = userMenus
      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // routers => router.layout.children 添加到layout的子路由
      routes.forEach((route) => {
        router.addRoute('layout', route)
      })

      state.routes = routes

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: ILoadInfo) {
      const { isKeepPassword, username, password } = payload
      // 1 实现登录逻辑
      const loginResult = await accountLoginRequest({
        username,
        password: Md5.hashStr(password)
      })
      const { id, token } = loginResult
      commit('setToken', token)

      if (isKeepPassword) {
        LStorage.set('username', username)
        LStorage.set('password', password)
      } else {
        LStorage.delete('username')
        LStorage.delete('password')
      }
      LStorage.set('token', token)

      // dispatch('getInitialDataAction', null, { root: true })

      // 2 请求用户信息
      const userInfo = await requestUserInfoById(id)
      commit('setUserInfo', userInfo)
      LStorage.set('userInfo', userInfo)

      // 3 查询角色的菜单树
      const userMenus = await requestUserMenusByRoleId(userInfo.role.id)
      commit('setUserMenus', userMenus)
      LStorage.set('userMenus', userMenus)

      // 4 设置当前激活状态的菜单id 为首页id
      commit('common/setActiveNavId', userMenus[0].id, { root: true })

      // 5 跳转到首页
      router.push('/home')
    },
    // 刷新
    loadLocalLoginData({ commit }) {
      const token = LStorage.get('token')
      if (token) {
        commit('setToken', token)

        // dispatch('getInitialDataAction', null, { root: true })
      }

      const userInfo = LStorage.get('userInfo')
      if (userInfo) {
        commit('setUserInfo', userInfo)
      }

      const userMenus = LStorage.get('userMenus')
      if (userMenus) {
        commit('setUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
