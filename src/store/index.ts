import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'
import login from './login'
import common from './common'
import home from './home'
import dashboard from './dashboard'
import manage from './manage'
import distribution from './distribution'
import exception from './exception'
import performance from './performance'

const store = createStore<IRootState>({
  state: () => {
    return {
      test: ''
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    home,
    common,
    dashboard,
    manage,
    distribution,
    exception,
    performance
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLoginData')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
