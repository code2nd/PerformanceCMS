/**
 * 1 数据加密
 * 2 命名规范
 * 3 过期时间
 */

import CryptoJS from 'crypto-js'
const config = require('../../package.json')

enum StorageType {
  l = 'localStorage',
  s = 'sessionStorage'
}

interface IStoredItem {
  value: any
  expires?: number
}

const SECRET_KEY = 'nkldsx@#45#VDss9'
const PREFIX = config.name + '_' + config.version + '_'
const IS_DEV = process.env.NODE_ENV === 'development'

class WyStorage {
  storage: Storage

  constructor(type: StorageType) {
    this.storage =
      type === StorageType.l ? window.localStorage : window.sessionStorage
  }

  private encrypt(data: string) {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString()
  }

  private decrypt(data: string) {
    const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY)
    return bytes.toString(CryptoJS.enc.Utf8)
  }

  private synthesisKey(key: string) {
    return PREFIX + key
  }

  set(
    key: string,
    value: any,
    expires: boolean | number = false,
    encryption = true
  ) {
    const source: IStoredItem = { value: null }
    if (expires) {
      source.expires =
        new Date().getTime() +
        (expires === true ? 1000 * 60 * 60 * 24 * 365 : expires)
    }
    source.value = value
    const data = JSON.stringify(source)
    this.storage.setItem(
      this.synthesisKey(key),
      IS_DEV ? data : encryption ? this.encrypt(data) : data
    )
  }

  get(key: string, encryption = true) {
    const value = this.storage.getItem(this.synthesisKey(key))
    let realValue = ''
    if (value) {
      if (encryption && !IS_DEV) {
        realValue = this.decrypt(value)
      } else {
        realValue = value
      }

      const source: IStoredItem = JSON.parse(realValue)
      const expires = source.expires
      const now = new Date().getTime()
      if (expires && now > expires) {
        this.delete(key)
        return null
      }

      return source.value
    }
  }

  delete(key: string) {
    this.storage.removeItem(this.synthesisKey(key))
  }

  clear() {
    this.storage.clear()
  }
}

const LStorage = new WyStorage(StorageType.l)
const SStorage = new WyStorage(StorageType.s)

export { LStorage, SStorage }
