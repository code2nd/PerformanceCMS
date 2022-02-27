import { Module } from 'vuex'

import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

import { IDashboardState } from './types'
import { IRootState } from '@/store/types'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    setCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    setCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    setCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    setAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      // 发送网络请求
      const categoryCountResult = await getCategoryGoodsCount()
      commit('setCategoryGoodsCount', categoryCountResult.data)

      const categorySaleResult = await getCategoryGoodsSale()
      commit('setCategoryGoodsSale', categorySaleResult.data)

      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('setCategoryGoodsFavor', categoryFavorResult.data)

      const addressGoodsResult = await getAddressGoodsSale()
      commit('setAddressGoodsSale', addressGoodsResult.data)
    }
  }
}

export default dashboardModule
