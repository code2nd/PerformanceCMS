import Request from './request'
import { BASE_URL, TIMEOUT } from './request/config'

import type { AxiosRequestHeaders } from 'axios'
// import storage from '@/utils/storage'
import { LStorage } from '@/utils/wystorage'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = LStorage.get('token')
      if (token) {
        ;(
          config.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})

export default request
