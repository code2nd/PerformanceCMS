import { computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { getMenuItemByRoutePath } from '@/utils/map-menus'

export function useActiveMenus() {
  const store = useStore()
  const route = useRoute()

  const userMenus = computed(() => store.state.login.userMenus)
  const currentPath = computed(() => route.path)

  let navId, menuId

  const currentMenuItem = getMenuItemByRoutePath(
    userMenus.value,
    currentPath.value
  )
  if (currentMenuItem) {
    // 如果有 parentId 就是二级菜单
    menuId = currentMenuItem.parentId ? currentMenuItem.id : null

    const pMenuItem = menuId
      ? userMenus.value.find((item) => item.id === currentMenuItem.parentId)
      : currentMenuItem

    navId = pMenuItem && pMenuItem.id
  }

  return [navId, menuId]
}
