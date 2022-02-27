import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { IUserMenu } from '@/service/login/type'

export function useMenuClick() {
  const router = useRouter()
  const store = useStore()

  // event handle
  const handleNavItemClick = (item: IUserMenu) => {
    // 设置当前选中的头部导航
    store.commit('common/setActiveNavId', item.id)

    if (!item.children) {
      router.push(item.url)
    } else {
      const { id, url } = item.children.sort((a, b) => a.sort - b.sort)[0]
      router.push(url)
      store.commit('common/setActiveMenuId', id)
    }
  }

  return [handleNavItemClick]
}
