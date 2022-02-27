<template>
  <div class="logo">
    <img class="logo-icon" src="~@/assets/imgs/logo.svg" alt="logo" />
    <span class="title">Performance</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const state = reactive({
      logoUrl: '../src/assets/imgs/logo.svg'
    })

    const store = useStore()
    const name = computed(() => store.state.login.userInfo.username)

    const { logoUrl } = toRefs(state)

    return {
      name,
      logoUrl
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
