<template>
  <div class="nav-header">
    <div class="nav-logo-box">
      <nav-logo />
    </div>
    <div class="nav-main">
      <div class="nav-main-left" v-show="isSelectShow">
        <nav-select />
      </div>
      <div class="nav-main-right">
        <nav-menu />
        <nav-alarm />
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

import NavLogo from './nav-logo.vue'
import NavMenu from './nav-menu.vue'
import UserInfo from './user-info.vue'
import NavAlarm from './nav-alarm.vue'
import NavSelect from './nav-select.vue'

export default defineComponent({
  components: {
    NavLogo,
    NavMenu,
    UserInfo,
    NavAlarm,
    NavSelect
  },
  setup() {
    const route = useRoute()

    const isSelectShow = computed(() => {
      return route.path.startsWith('/overview') ? true : false
    })

    return {
      isSelectShow
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* display: flex;
  align-items: center; */
  // .flexVerticalCenter();
  .nav-logo-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 200px;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 1px;
      height: 32px;
      background: #ebeef5;
    }
  }
  .nav-main {
    flex: 1;
    display: flex;

    .nav-main-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    /* .el-menu-item {
      &:hover {
        background-color: #fff4ee;
      }
    } */
  }
}
</style>
