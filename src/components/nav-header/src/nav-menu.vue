<template>
  <div class="nav-menu">
    <el-menu
      :default-active="activeNavId + ''"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-menu-item :index="item.id + ''" @click="handleNavItemClick(item)">{{
          item.name
        }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useActiveMenus } from '../hooks/useActiveMenus'
import { useMenuClick } from '../hooks/useMenuClick'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // Eleme
  },
  setup() {
    // store
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    const activeNavId = computed(() => store.state.common.activeNavId)

    // 当前选中的菜单
    const [navId, menuId] = useActiveMenus()
    store.commit('common/setActiveNavId', navId)
    store.commit('common/setActiveMenuId', menuId)

    // 菜单点击
    const [handleNavItemClick] = useMenuClick()

    return {
      userMenus,
      activeNavId,
      handleNavItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
}
</style>
