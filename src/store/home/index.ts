import { Module } from 'vuex'

import { IHomeState, IProject } from './type'
import { IRootState, IStoreType } from '../types'

import { IFilter } from '@/service/home/type'

import { projectListRequest } from '@/service/home'

import { LStorage } from '@/utils/wystorage'

const homeModule: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {
      projectList: [],
      projectCount: 0
    }
  },
  getters: {},
  mutations: {
    setProjectList(state, projectList: IProject[]) {
      state.projectList = projectList
      LStorage.set('projectList', projectList)
    },
    setProjectCount(state, projectCount: number) {
      state.projectCount = projectCount
    }
  },
  actions: {
    async projectListAction({ commit, rootState }, payload: IFilter) {
      // 获取项目列表
      const { total, list } = await projectListRequest(payload)
      commit('setProjectList', list)
      commit('setProjectCount', total)
      if (!payload) {
        // 全部的项目列表
        commit('common/setProjectList', list, { root: true })
        if (!(rootState as IStoreType).common.activeProject) {
          commit('common/setActiveProject', list[0].id, { root: true })
        }
      }
    }
  }
}

export default homeModule
