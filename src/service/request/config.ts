let BASE_URL = ''
const TIMEOUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api'
} else {
  BASE_URL = 'http://test.com/test'
}

const WS_URL = 'wss://stu.jalamy.cn:3002'

export { BASE_URL, TIMEOUT, WS_URL }
