import { Module } from 'vuex'
import { ICommonState, IProject } from './type'
import { IRootState } from '../types'
import { IKeyValue } from '@/service/types'

import {
  projectListRequest,
  projectCategoryList,
  roleListRequest
} from '@/service/common'

import { LStorage } from '@/utils/wystorage'

const commonModule: Module<ICommonState, IRootState> = {
  namespaced: true,
  state() {
    return {
      currentPage: '/login',
      activeMenuId: 0,
      projectList: [],
      activeProject: null,
      activeNavId: null,
      projectCategoryList: null,
      roleList: []
    }
  },
  getters: {},
  mutations: {
    setCurrentPage(state, currentPage: string) {
      state.currentPage = currentPage
      LStorage.set('currentPage', currentPage)
    },
    setActiveMenuId(state, activeMenuId: number) {
      state.activeMenuId = activeMenuId
    },
    setProjectList(state, projectList: IProject[]) {
      state.projectList = projectList
      LStorage.set('projectList', projectList)

      const storedAvtiveProject = LStorage.get('activeProject')
      if (storedAvtiveProject) {
        state.activeProject = storedAvtiveProject
      } else {
        state.activeProject = projectList[0].id
        LStorage.set('activeProject', projectList[0].id)
      }
    },
    setActiveProject(state, activeProject: number) {
      state.activeProject = activeProject
      LStorage.set('activeProject', activeProject)
    },
    setActiveNavId(state, avtiveNavId: number) {
      state.activeNavId = avtiveNavId
    },
    setProjectCategoryList(state, projectCategoryList: IKeyValue[]) {
      state.projectCategoryList = projectCategoryList
      // LStorage.set('projectCategoryList', projectCategoryList)
    },
    setRoleList(state, roleList: IKeyValue[]) {
      state.roleList = roleList
    }
  },
  actions: {
    async getProjectList({ commit }) {
      const projectList = await projectListRequest()
      commit('setProjectList', projectList)
    },
    async getProjectCategoryListAcion({ commit }) {
      const list = await projectCategoryList()
      commit('setProjectCategoryList', list)
    },
    async getRoleList({ commit }) {
      const res = await roleListRequest()
      commit('setRoleList', res)
    }
  }
}

export default commonModule
