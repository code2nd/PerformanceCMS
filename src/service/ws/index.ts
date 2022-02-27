type CB = (param?: Record<string, unknown>) => void

class Socket {
  url: string
  openCb: CB
  messageCb: CB
  heartCheck: HeartCheck
  ws: WebSocket
  static instance: Socket

  constructor(url: string, openCb: CB, messageCb: CB) {
    this.url = url
    this.openCb = openCb
    this.messageCb = messageCb
    this.heartCheck = new HeartCheck()
    this.ws = new WebSocket(url)
    this.createConnect()
  }

  static getInstance(url: string, openCb: CB, messageCb: CB) {
    if (!this.instance) {
      this.instance = new Socket(url, openCb, messageCb)
    }

    return this.instance
  }

  createConnect() {
    // this.ws = new WebSocket(this.url)

    // 连接成功
    this.ws.onopen = () => {
      // 开始心跳检测
      this.heartCheck.reset().start(this)
      this.openCb && this.openCb()
    }

    // 监听消息
    this.ws.onmessage = (event) => {
      // 如果onmessage触发，说明收到消息了，则重新开启心跳检测
      this.heartCheck.reset().start(this)
      if (event.data !== 'pong') {
        this.messageCb(JSON.parse(event.data))
      }
      // console.log(event.data)
    }

    // 关闭连接的回调
    this.ws.onclose = () => {
      // console.log("连接关闭了！");
    }

    // 出现错误的回调
    this.ws.onerror = () => {
      // 重新连接
      this.reconnect()
    }
  }

  close() {
    this.heartCheck.reset()
    this.ws.close()
    // console.log('前端关闭连接')
  }

  send(data: unknown, type = 'text') {
    const sendData = JSON.stringify({
      type,
      data,
      token: 'dhuhfuhur2u3h4324h3u'
    })
    this.ws.send(sendData)
  }

  reconnect() {
    this.close()
    this.createConnect()
    // console.log("重新连接");
  }
}

class HeartCheck {
  timeout: number
  timer: number
  serverTimer: number

  constructor() {
    // 心跳检测时间
    this.timeout = 10000
    this.timer = 0
    this.serverTimer = 0
  }

  reset() {
    clearTimeout(this.timer)
    clearTimeout(this.serverTimer)
    return this
  }

  start(websocket: Socket) {
    this.timer && clearTimeout(this.timer)
    this.serverTimer && clearTimeout(this.serverTimer)

    this.timer = setTimeout(() => {
      // 这里发送一个心跳，后端收到后返回一个心跳消息
      // onmessage拿到返回的心跳就说明连接正常
      websocket.send('ping', 'check')
      // 如果超过一定时间还没有重置，说明后端未向我们推送消息
      this.serverTimer = setTimeout(() => {
        this.reset()
        websocket.reconnect()
        // console.log('重连')
      }, this.timeout)
    }, this.timeout)
  }
}

export default Socket
