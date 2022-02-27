import { Module } from 'vuex'
import { IExceptionState } from './type'
import { IRootState } from '../types'

import {
  IExceptionMonitor,
  INameValue,
  IExceptionTendency
} from '@/service/exception/type'

import {
  exceptionMonitorRequest,
  exceptionProportionRequest,
  exceptionTendencyRequest,
  exceptionCategoryListRequest
} from '@/service/exception'
import { IKeyValue } from '@/service/types'

const exceptionModule: Module<IExceptionState, IRootState> = {
  namespaced: true,
  state() {
    return {
      exceptionMonitor: <IExceptionMonitor>{},
      exceptionProportion: [],
      exceptionTendency: <IExceptionTendency>{},
      exceptionCategoryList: [],
      alarmCount: 0
    }
  },
  getters: {},
  mutations: {
    setExceptionMonitor(state, exceptionMonitor: IExceptionMonitor) {
      state.exceptionMonitor = exceptionMonitor
    },
    setExceptionProportion(state, exceptionProportion: INameValue[]) {
      state.exceptionProportion = exceptionProportion
    },
    setExceptionTendency(state, exceptionTendency: IExceptionTendency) {
      state.exceptionTendency = exceptionTendency
    },
    setExceptionCategoryList(state, exceptionCategoryList: IKeyValue[]) {
      state.exceptionCategoryList = exceptionCategoryList
    },
    setAlarmCount(state, alarmCount: number) {
      state.alarmCount = alarmCount
    }
  },
  actions: {
    async getExceptionMonitorData({ commit }, payload: number) {
      const exceptionMonitorData = await exceptionMonitorRequest(payload)
      commit('setExceptionMonitor', exceptionMonitorData)
    },
    async getExceptionProportionData({ commit }, payload: number) {
      const exceptionProportionData = await exceptionProportionRequest(payload)
      commit('setExceptionProportion', exceptionProportionData)
    },
    async getExceptionTendencyData({ commit }, payload: number) {
      const exceptionTendencyData = await exceptionTendencyRequest(payload)
      commit('setExceptionTendency', exceptionTendencyData)
    },
    async getExceptionCategoryData({ commit }) {
      const exceptionCategoryData = await exceptionCategoryListRequest()
      commit('setExceptionCategoryList', exceptionCategoryData)
    }
  }
}

export default exceptionModule
