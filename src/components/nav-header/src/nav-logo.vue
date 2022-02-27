<template>
  <div class="logo">
    <img class="logo-icon" src="~@/assets/imgs/logo.svg" alt="logo" />
    <span class="title">Performance</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

import { LStorage } from '@/utils/wystorage'

export default defineComponent({
  setup() {
    const state = reactive({
      logoUrl: '../src/assets/imgs/logo.svg'
    })

    const store = useStore()
    const name = computed(() => store.state.login.userInfo.username)

    const { logoUrl } = toRefs(state)

    const router = useRouter()
    /* const handleExitClick = () => {
      LStorage.delete('token')
      router.push('/login')
    } */

    return {
      name,
      logoUrl
      // handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.logo {
  display: flex;
  align-items: center;
  .logo-icon {
    width: 48px;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #666;
  }
}
</style>
