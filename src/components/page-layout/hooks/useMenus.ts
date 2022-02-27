import { computed } from 'vue'
import { useStore } from '@/store'

import { IUserMenu } from '@/service/login/type'

export function useMenus() {
  // 根据路由切换获取对应的菜单数据（传入 layout-row 组件供菜单渲染）

  const store = useStore()

  const currentPage = computed(() => store.state.common.currentPage)
  const activeMenuId = computed(() => store.state.common.activeMenuId + '')
  const userMenu = computed(() => store.state.login.userMenus)

  const menus = computed(() => {
    const res = userMenu.value.filter((menu: IUserMenu) => {
      return currentPage.value.startsWith(menu.url)
    })

    return res[0].children
  })

  return [currentPage, activeMenuId, menus]
}
