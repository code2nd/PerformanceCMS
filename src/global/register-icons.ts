import { App, markRaw } from 'vue'

// 按需引入
import {
  TrendCharts, // 看板
  Histogram, // 性能预览
  WarningFilled, // 异常监控
  LocationFilled, // 低于分布
  Management, // 项目
  Promotion, // 访客
  UserFilled, // 用户
  Menu, // 菜单
  Avatar, // 角色
  Platform,
  HelpFilled,
  Bottom,
  Top
} from '@element-plus/icons-vue'

// 全量引入
// import * as Icons from '@element-plus/icons-vue'

const mapIcon = markRaw({
  TrendCharts, // 看板
  Histogram, // 性能预览
  WarningFilled, // 异常监控
  LocationFilled, // 低于分布
  Management, // 项目
  Promotion, // 访客
  UserFilled, // 用户
  Menu, // 菜单
  Avatar, // 角色,
  Platform,
  HelpFilled,
  Bottom,
  Top
})

const installIcon = (app: App) => {
  // 便于模板获取
  app.config.globalProperties.$icon = mapIcon

  // 全量注册
  // app.config.globalProperties.$icon = Icons
}

export default installIcon
