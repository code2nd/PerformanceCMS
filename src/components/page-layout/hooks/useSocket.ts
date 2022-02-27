import { LStorage } from '@/utils/wystorage'
import Socket from '@/service/ws'
import { useStore } from '@/store'
import { WS_URL } from '@/service/request/config'

export function useSocket() {
  const store = useStore()
  const token = LStorage.get('token')

  if (token) {
    const socket = Socket.getInstance(
      WS_URL,
      () => {
        socket.send({ path: '/alarm' })
      },
      (data = {}) => {
        const { name, value } = data
        switch (name) {
          case 'alarm':
            store.commit('exception/setAlarmCount', value)
            break
          default:
            return
        }
      }
    )
  }
}
