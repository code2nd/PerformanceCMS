import { useStore } from '@/store'

export function usePermission(
  moduleName: string,
  pageName: string,
  handleName: string
) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `${moduleName}:${pageName}:${handleName}`
  return !!permissions.find((item: string) => item === verifyPermission)
}
