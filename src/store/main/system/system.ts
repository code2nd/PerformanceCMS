import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    setUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    setUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    setRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    setRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    setGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    setGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    setMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    setMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
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
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1 获取 pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      /* switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      } */
      // 发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`set${changePageName}List`, list)
      commit(`set${changePageName}Count`, totalCount)

      /* switch (pageName) {
        case 'user':
          commit('setUsersList', list)
          commit('setUsersCount', totalCount)
          break
        case 'role':
          commit('setRoleList', list)
          commit('setRoleCount', totalCount)
      } */
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
          offset: 0,
          size: 10
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
        aueryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload) {
      // 1 编辑数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      // 2 请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
