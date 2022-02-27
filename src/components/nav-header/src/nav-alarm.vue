<template>
  <div class="nav-alarm">
    <el-badge
      :value="count"
      :max="99"
      :hidden="!count"
      class="item"
      @click="handleAlarmClick"
    >
      <el-icon style="font-size: 20px" color="#666">
        <bell />
      </el-icon>
    </el-badge>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Bell } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { getMenuItemByRoutePath } from '@/utils/map-menus'

export default defineComponent({
  components: {
    Bell
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const count = computed(() => store.state.exception.alarmCount)
    const menus = computed(() => store.state.login.userMenus)

    const handleAlarmClick = () => {
      router.push('/monitor/exception')

      const item = getMenuItemByRoutePath(menus.value, '/monitor/exception')
      store.commit('common/setActiveMenuId', item?.id)
      store.commit('common/setActiveNavId', item?.parentId)
    }

    return { count, handleAlarmClick }
  }
})
</script>

<style scoped>
.nav-alarm {
  margin: 6px 30px 0;
  cursor: pointer;
}
</style>
