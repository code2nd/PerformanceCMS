import { Module } from 'vuex'
import { Md5 } from 'ts-md5/dist/md5'

import { IManageState } from './type'
import { IRootState } from '../types'
import {
  getPageListData,
  updatePageData,
  createPageData,
  deletePageData
} from '@/service/manage'

const manageModule: Module<IManageState, IRootState> = {
  namespaced: true,
  state() {
    return {
      projectList: [],
      projectCount: 0,
      visitorList: [],
      visitorCount: 0,
      visitList: [],
      visitCount: 0,
      interfaceList: [],
      interfaceCount: 0,
      exceptionList: [],
      exceptionCount: 0,
      performanceList: [],
      performanceCount: 0,
      userList: [],
      userCount: 0,
      menuList: [],
      menuCount: 0,
      roleList: [],
      roleCount: 0,
      project_categoryList: [],
      project_categoryCount: 0,
      exception_categoryList: [],
      exception_categoryCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        /* switch (pageName) {
          case 'users':
            return state.usersList
          case 'role':
            return state.roleList
        } */
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    setProjectList(state, projectList: any[]) {
      state.projectList = projectList
    },
    setProjectCount(state, projectCount: number) {
      state.projectCount = projectCount
    },
    setVisitorList(state, visitorList: any[]) {
      state.visitorList = visitorList
    },
    setVisitorCount(state, visitorCount: number) {
      state.visitorCount = visitorCount
    },
    setVisitList(state, visitList: any[]) {
      state.visitList = visitList
    },
    setVisitCount(state, visitCount: number) {
      state.visitCount = visitCount
    },
    setInterfaceList(state, interfaceList: any[]) {
      state.interfaceList = interfaceList
    },
    setInterfaceCount(state, interfaceCount: number) {
      state.interfaceCount = interfaceCount
    },
    setExceptionList(state, exceptionList: any[]) {
      state.exceptionList = exceptionList
    },
    setExceptionCount(state, exceptionCount: number) {
      state.exceptionCount = exceptionCount
    },
    setPerformanceList(state, performanceList: any[]) {
      state.performanceList = performanceList
    },
    setPerformanceCount(state, performanceCount: number) {
      state.performanceCount = performanceCount
    },
    setUserList(state, userList: any[]) {
      state.userList = userList
    },
    setUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    setMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    setMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    },
    setRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    setRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    setProject_categoryList(state, project_categoryList: any[]) {
      state.project_categoryList = project_categoryList
    },
    setProject_categoryCount(state, project_categoryCount: number) {
      state.project_categoryCount = project_categoryCount
    },
    setException_categoryList(state, exception_categoryList: any[]) {
      state.exception_categoryList = exception_categoryList
    },
    setException_categoryCount(state, exception_categoryCount: number) {
      state.exception_categoryCount = exception_categoryCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageName, queryInfo } = payload
      const pageUrl = `/${pageName}`

      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, total } = pageResult

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`set${changePageName}List`, list)
      commit(`set${changePageName}Count`, total)
    },
    async editPageDataAction({ dispatch }, payload) {
      const { pageName, updateData, id } = payload
      const url = `/${pageName}/${id}`
      if (pageName === 'user') {
        for (const [key, value] of Object.entries(updateData)) {
          if (key.startsWith('password') && value) {
            updateData[key] = Md5.hashStr(value as string)
          }
        }
      }
      await updatePageData(url, updateData)

      // 请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          page: 1,
          pageSize: 10
        }
      })
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 获取 pageName 和 id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 调用删除网络请求
      await deletePageData(pageUrl)

      // 重新请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          page: 1,
          pageSize: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      // 请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          page: 1,
          pageSize: 10
        }
      })
    }
  }
}

export default manageModule
