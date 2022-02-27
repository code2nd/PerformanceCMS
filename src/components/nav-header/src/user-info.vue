<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="avatar"></el-avatar>
        <span class="user-name">{{ username }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

import { ArrowDown } from '@element-plus/icons-vue'
import { LStorage } from '@/utils/wystorage'

import Socket from '@/service/ws'

export default defineComponent({
  components: {
    ArrowDown
  },
  setup() {
    const store = useStore()
    const username = computed(() => store.state.login.userInfo.username)
    const avatar = computed(() => store.state.login.userInfo.avatar)

    const router = useRouter()
    const handleExitClick = () => {
      LStorage.delete('token')
      // 关闭websocket连接
      if (Socket.instance) {
        Socket.instance.close()
      }
      router.push('/login')
    }

    return {
      username,
      avatar,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    .user-name {
      padding-left: 10px;
    }
  }
}
</style>
