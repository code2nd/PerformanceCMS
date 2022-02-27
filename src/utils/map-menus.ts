import { IUserMenu, IRouteRecord } from '../service/login/type'

let firstMenu = '/home'

// 动态路由
export function mapMenusToRoutes(userMenus: IUserMenu[]): IRouteRecord[] {
  const routes: IRouteRecord[] = []

  // 1 先加载所有的routes
  const allRoutes: IRouteRecord[] = []
  /**
   * webpack提供的函数
   * directory { string } - 读取文件的路径
   * useSubdirectories { boolean } - 是都遍历文件的子目录
   * regExp { RegExp } - 匹配文件的正则
   */
  const routeFiles = require.context('../router', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    if (key !== './index.ts') {
      const route = require('../router' + key.split('.')[1]).default
      // 获取所有有路由
      allRoutes.push(route)
    }
  })

  // 2 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: IUserMenu[]) => {
    for (const menu of menus) {
      if (menu.type !== 3) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push({ ...route, sort: menu.sort })
        if (!firstMenu) {
          firstMenu = menu.url
        }

        _recurseGetRoute(menu.children || [])
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recuresGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recuresGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recuresGetPermission(userMenus)

  return permissions
}

export function menuMapLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }

  _recurseGetLeaf(menuList)

  return leafKeys
}

// 根据路由获取菜单项
export function getMenuItemByRoutePath(
  menus: IUserMenu[],
  path: string
): IUserMenu | null {
  let _menu: IUserMenu | null = null

  recurse(menus, path)
  function recurse(menuList: IUserMenu[], path: string) {
    for (let i = 0; i < menuList.length; i++) {
      if (menuList[i].url === path) {
        _menu = menuList[i]
      }

      if (menuList[i].type === 1 && menuList[i].children) {
        recurse(menuList[i].children || [], path)
      }
    }
  }

  return _menu
}

export { firstMenu }
