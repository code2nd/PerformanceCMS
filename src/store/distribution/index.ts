import { Module } from 'vuex'
import { IDistributionState } from './type'
import { IRootState } from '../types'
import { IDataType } from '@/components/page-echarts/types'
import { mapDataRequest, rankDataRequest } from '@/service/distribution'

const distributionModule: Module<IDistributionState, IRootState> = {
  namespaced: true,
  state() {
    return {
      mapData: [],
      rankData: []
    }
  },
  getters: {},
  mutations: {
    setMapData(state, mapData: IDataType[]) {
      state.mapData = mapData
    },
    setRankData(state, rankData: IDataType[]) {
      state.rankData = rankData
    }
  },
  actions: {
    async getMapData({ commit }, payload: number) {
      const mapData = await mapDataRequest(payload)
      commit('setMapData', mapData)
    },
    async getRankData({ commit }, payload: number) {
      const rankData = await rankDataRequest(payload)
      commit('setRankData', rankData)
    }
  }
}

export default distributionModule
