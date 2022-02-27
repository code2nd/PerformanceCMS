<template>
  <div class="login-account">
    <el-form ref="formRef" :model="account" :rules="rules" status-icon>
      <el-form-item prop="username">
        <el-input v-model="account.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password" class="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <div class="account-control">
          <el-checkbox v-model="account.isKeepPassword">记住密码</el-checkbox>
          <el-link type="primary" :underline="false">忘记密码</el-link>
        </div>
      </el-form-item>
      <el-form-item class="login-btn-wrapper">
        <el-button type="primary" class="login-btn" @click="handleSubmit"
          >立即登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from '@/store'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import { LStorage } from '@/utils/wystorage'

interface Account {
  username: string
  password: string
  isKeepPassword: boolean
}

export default defineComponent({
  setup() {
    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive<Account>({
      username: LStorage.get('username') ?? '',
      password: LStorage.get('password') ?? '',
      isKeepPassword: LStorage.get('username') ? true : false
    })

    const handleSubmit = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 提交
          const { username, password, isKeepPassword } = account

          /**
           * 1 登录后的逻辑（网络请求，拿到数据后的处理）
           * 2 数据保存到本地
           * 3 发送其他请求（请求当前用户信息）
           * 4 拿到用户的菜单
           * 5 跳转到首页
           */

          store.dispatch('login/accountLoginAction', {
            username,
            password,
            isKeepPassword
          })
        } else {
          return false
        }
      })
    }

    return {
      account,
      rules,
      formRef,
      handleSubmit
    }
  }
})
</script>

<style lang="less" scoped>
.login-account {
  .password {
    margin-bottom: 10px;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn-wrapper {
    margin: 0;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
