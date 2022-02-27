<template>
  <div class="login">
    <el-container class="content">
      <login-panel />
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  .pos(relative, 100%);
  background: url(../../assets/imgs/bg.jpg);
  background-size: cover;
  overflow: hidden;
  .video {
    .pos(absolute);
  }
  .content {
    .pos(absolute, 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    &:deep(.el-input__suffix) {
      align-items: center;
    }
  }
}
</style>
