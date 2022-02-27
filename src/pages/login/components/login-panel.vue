<template>
  <div class="login-panel">
    <el-header class="header">性能监控平台</el-header>
    <el-main class="main">
      <login-account />
    </el-main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginAccount from './login-account.vue'

export default defineComponent({
  components: {
    LoginAccount
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 376px;
  padding: 32px 44px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  margin-bottom: 200px;
  .header {
    .flexCenter();
    height: auto;
    font-size: 24px;
  }
}
</style>
