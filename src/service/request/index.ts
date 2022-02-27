import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestInterceptors, RequestConfig } from './type'

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 全局的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        if (data.errorCode && data.errorCode !== 999) {
          console.log('请求失败，错误信息')
        } else {
          return data
        }
        // return res
      },
      (err) => {
        // 根据不同的errorCode显示不同的error信息
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 每个请求对应的拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  put<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }
}

export default Request
