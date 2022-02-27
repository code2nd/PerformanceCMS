import { Module } from 'vuex'
import { IDashboardState } from './type'
import { IFlowData, IVisitCount, IVisitCost } from '@/service/dashboard/type'
import { IRootState } from '../types'

import {
  flowDataRequest,
  visitCountRequest,
  visitCostRequest
} from '@/service/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      flowData: <IFlowData>{},
      visitCount: [],
      visitCost: []
    }
  },
  getters: {},
  mutations: {
    // 流量数据
    setFlowData(state, flowData: IFlowData) {
      state.flowData = flowData
    },
    setVisitCount(state, visitCount: IVisitCount[]) {
      state.visitCount = visitCount
    },
    setVisitCost(state, visitCost: IVisitCost[]) {
      state.visitCost = visitCost
    }
  },
  actions: {
    async getFlowData({ commit }, payload) {
      const flowData = await flowDataRequest(payload)
      commit('setFlowData', flowData)
    },
    async getVisitCount({ commit }, payload) {
      const visitCount = await visitCountRequest(payload)
      commit('setVisitCount', visitCount)
    },
    async getVisitCost({ commit }, payload) {
      const visitCost = await visitCostRequest(payload)
      commit('setVisitCost', visitCost)
    }
  }
}

export default dashboardModule
