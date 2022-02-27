import { Module } from 'vuex'
import { IPerformanceState } from './type'
import { IRootState } from '../types'

import {
  IPerformancePage,
  INameValue,
  IInterfaceCount,
  IInterfaceTop
} from '@/service/performance/type'

import {
  performanceCostRequest,
  performancePageRequest,
  interfaceCostRequest,
  interfaceCountRequest,
  interfaceTopRequest
} from '@/service/performance'

const performanceModule: Module<IPerformanceState, IRootState> = {
  namespaced: true,
  state() {
    return {
      performancePage: <IPerformancePage>{},
      performanceCost: [],
      interfaceCount: <IInterfaceCount>{},
      interfaceCost: [],
      interfaceTop: []
    }
  },
  getters: {},
  mutations: {
    setPerformancePageData(state, performancePage: IPerformancePage) {
      state.performancePage = performancePage
    },
    setPerformanceCostData(state, performanceCost: INameValue[]) {
      state.performanceCost = performanceCost
    },
    setInterfaceCountData(state, interfaceCount: IInterfaceCount) {
      state.interfaceCount = interfaceCount
    },
    setInterfaceCostData(state, interfaceCost: INameValue[]) {
      state.interfaceCost = interfaceCost
    },
    setInterfaceTopData(state, interfaceTop: IInterfaceTop[]) {
      state.interfaceTop = interfaceTop
    }
  },
  actions: {
    async getPerformancePageData({ commit }, payload: number) {
      const performancePageData = await performancePageRequest(payload)
      commit('setPerformancePageData', performancePageData)
    },
    async getPerformanceCostData({ commit }, payload: number) {
      const performanceCostData = await performanceCostRequest(payload)
      commit('setPerformanceCostData', performanceCostData)
    },
    async getInterfaceCostData({ commit }, payload: number) {
      const interfaceCost = await interfaceCostRequest(payload)
      commit('setInterfaceCostData', interfaceCost)
    },
    async getInterfaceCountData({ commit }, payload: number) {
      const interfaceCount = await interfaceCountRequest(payload)
      commit('setInterfaceCountData', interfaceCount)
    },
    async getInterfaceTopData({ commit }, payload: number) {
      const interfaceTop = await interfaceTopRequest(payload)
      commit('setInterfaceTopData', interfaceTop)
    }
  }
}

export default performanceModule
